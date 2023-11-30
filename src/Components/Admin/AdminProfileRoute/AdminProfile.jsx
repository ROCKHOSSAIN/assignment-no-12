import React from 'react';
import Swal from 'sweetalert2';
import  { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaCaretRight } from 'react-icons/fa';
const AdminProfile = ({profiledata}) => {
    const { upazila,name,bloodGroup,email,district,role,imageUrl } =  profiledata 
    console.log(upazila)
    const { register, handleSubmit, reset } = useForm()
    const [districts, setdistrict] = useState([])
    const [upazilas, setupazila] = useState([])
    const { user } = useContext(AuthContext)



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
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        console.log(data);
        const name=data.name
        const district = data.district;
        const upazila = data.upazila;
        const imageUrl = data.photoUrl;
        const bloodGroup = data.bloodGroup;



        const userinfo = {
            name,
            district,
            upazila,
            imageUrl,
            bloodGroup,
            

        };

        console.log(userinfo);
        console.log(  name,
            district,
            upazila,
            imageUrl,
            bloodGroup,
            )

        const userRes = await axiosSecure.put(`/allUser/${email}`, userinfo);

        console.log(userRes.data);

        if (userRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the menu`,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };
    return (
        <div>
            <div>
                <div>
                    <img src={imageUrl} alt="" />
                    <h1>Name:{name}</h1>
                    <h1>Upazila:{upazila}</h1>
                    <h1>Role:{role}</h1>
                    <h1>Email:{email}</h1>
                    <h1>District:{district}</h1>
                    <h1>BloodGroup:{bloodGroup}</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-6'>
                        {/* <input {...register("name")} /> */}
                        <div className="form-control  w-full my-6">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input defaultValue={name} type="text" placeholder="Name" {...register("name")} name="name" className="input input-bordered" />

                        </div>
                        <div className='form-control w-full my-6'>
                            <label className="label">
                                <span className="label-text">Photo*</span>
                            </label>
                            <input  {...register('photoUrl', { required: true })} type="file" className="file-input w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">upazila*</span>

                            </label>


                            <select  {...register('upazila', { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value="default">Select your upazila</option>
                                {
                                    upazilas.map(upazilas => <option key={upazilas.id}>
                                        {upazilas.name}
                                    </option>)
                                }


                            </select>

                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">District*</span>

                            </label>


                            <select   {...register('district', { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value="default">Select your District</option>
                                {
                                    districts.map(districts => <option key={districts.id}>
                                        {districts.name}
                                    </option>)
                                }


                            </select>


                        </div>


                    </div>

                    {/* time and date  */}
                    <div className='flex gap-6'>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input disabled type="email" defaultValue={email} {...register("email")} placeholder="email" name="email" className="input input-bordered" />

                        </div>

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Blood Group*</span>

                            </label>


                            <select defaultValue={bloodGroup} {...register('bloodGroup', { required: true })}
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
                    </div>


                    <button className='btn bg-red-700 hover:bg-red-700 mt-10 w-full mx-auto flex text-white'>
                        Update <FaCaretRight></FaCaretRight>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminProfile;