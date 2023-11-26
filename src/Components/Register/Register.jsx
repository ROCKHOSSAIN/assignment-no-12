import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiousPublic from "../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
    const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`
const Register = () => {
    // const axiosPublic = useAxiousPublic()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiousPublic()
    const navigate = useNavigate()
    const [district, setdistrict] = useState([])
    const [upazila, setupazila] = useState([])
    const [errorMsg, setErrorMsg] = useState("");
    const { createUser, updateUserProfile,user } = useContext(AuthContext)
    const email = user?.email
    useEffect(() => {
        fetch('../../../district.json')
            .then(res => res.json())
            .then(data => setdistrict(data))
    }, [])
    useEffect(() => {
        fetch('../../../upazila.json')
            .then(res => res.json())
            .then(data => setupazila(data))
    }, [])
    const onSubmit = async(data) => {
        // Check if passwords match
       
        const imageFile = {image: data.photoUrl[0]}
        console.log(imageFile)
        const imageRes = await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'content-type':'multipart/form-data'
            }
        });
        const imageUrl = imageRes.data.data.display_url;
        console.log(imageUrl)
        if (data?.password !== data?.confirmPassword) {
            setErrorMsg("Passwords do not match");
            console.log(errorMsg)
            return;
        }
        createUser(data.email, data.password)
            .then(result => {
                const email = data.email
                const name =data.name
                const district = data.district
                const upazila = data.upazila
                const bloodGroup = data.bloodGroup
                const photoUrl = imageFile
                const userinfo={
                    email,
                    name,
                    district,
                    upazila,
                    bloodGroup,
                    photoUrl,
                    status:"active"
                }
                console.log(email)
                console.log(name)
                console.log(district)
                const loggedUser = result.user
                console.log(loggedUser);
              
                updateUserProfile(data.name, imageUrl)
                    .then((res) => {
                        axiosPublic.post('/allUser',userinfo)
                        console.log('user profile set')
                        if(res.data.insertedId){

                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User has been created",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        navigate('/')
                    })
                    .catch(error => console.error(error))
            })

        console.log(data);

    };


    return (
        <>

            <div>
                <div>

                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse md:gap-10">
                            <div className=" md:w-1/2">

                                <img src="https://i.ibb.co/yBzGrqK/blood-donation-background-vector-14615764-removebg-preview.png" alt="" />

                            </div>
                            <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                                    <h1 className="text-4xl font-bold">Registration here</h1>
                                    <div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" placeholder="Name" {...register("name", { required: true })} name="name" className="input input-bordered" />
                                            {errors.name && <span className="text-red-600">Name is required</span>}
                                        </div>
                                        <div className='form-control w-full my-6'>
                                            <label className="label">
                                                <span className="label-text">Photo</span>
                                            </label>
                                            <input {...register('photoUrl', { required: true })} type="file" className="file-input w-full max-w-xs" />
                                        </div>
                                    </div>

                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Blood Group*</span>

                                        </label>


                                        <select defaultValue="default" {...register('bloodGroup', { required: true })}
                                            className="select select-bordered w-full ">
                                            <option disabled value="default">Select your blood group</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">B-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </select>

                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="label-text">District*</span>

                                        </label>


                                        <select defaultValue="default" {...register('district', { required: true })}
                                            className="select select-bordered w-full ">
                                            <option disabled value="default">Select your District</option>
                                            {
                                                district.map(district => <option key={district.id}>
                                                    {district.name}
                                                </option>)
                                            }


                                        </select>

                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="label-text">upazila*</span>

                                        </label>


                                        <select defaultValue="default" {...register('upazila', { required: true })}
                                            className="select select-bordered w-full ">
                                            <option disabled value="default">Select your upazila</option>
                                            {
                                                upazila.map(upazila => <option key={upazila.id}>
                                                    {upazila.name}
                                                </option>)
                                            }


                                        </select>

                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>

                                        </label>
                                        <input type="email" {...register("email", { required: true })} placeholder="email" name="email" className="input input-bordered" />
                                        {errors.email && <span className="text-red-600">Email is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password"  {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })} placeholder="password" className="input input-bordered" />
                                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input
                                            type="password"
                                            {...register("confirmPassword")}
                                            placeholder="confirm password"
                                            className="input input-bordered"
                                        />
                                    </div>
                                    {errors?.confirmPassword && <span className="text-red-600">Passwords do not match</span>}
                                    {errorMsg && (
                                        <p className="text-red-500 font-semibold text-center text-base my-2">
                                            {errorMsg}
                                        </p>
                                    )}
                                    <div className="form-control mt-6">
                                        <input className="btn btn-primary" type="submit" value="Register" id="" />
                                    </div>

                                </form>

                                <p className='text-center'><small>New User? <Link to="/login"><span className='border-0 border-b-2 hover:border-sky-400'>Already have an account?</span></Link></small></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;