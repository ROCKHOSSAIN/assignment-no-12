import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCaretRight } from "react-icons/fa";
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';

// import useAxiousPublic from '../../hooks/useAxiosPublic';

const DonorRequest = () => {
    // const [{name},{email}] = useLoaderData()
    const { register, handleSubmit, reset } = useForm()
    // const [userinfo, setuserinfo] = useState({})
    const [district, setdistrict] = useState([])
    const [upazila, setupazila] = useState([])
    const {user} = useContext(AuthContext)
    // const donorName = 

    // useEffect(() => {

    //     fetch('https://assignment-no-12-server.vercel.app/allUser')
    //         .then(res => res.json())
    //         .then(data => {
    //             setuserinfo(data)
    //             // setLoading(false)
    //         })
    // }, [])
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

    const onSubmit = async (data,e) => {
        e.preventDefault()
        console.log(data)
        const email = data.email
        const RecipentName =data.RecipentName
        const district = data.district
        const upazila = data.upazila
        const hospitalName = data.hospitalName
        const date = data.date
        const time = data.time
        const address = data.address
        const requestMessage = data.requestMessage
        const userinfo={
            email,
            RecipentName,
            district,
            upazila,
            hospitalName,
            date,
            time,
            address,
            requestMessage,

            status:"pending"
        }
        console.log(userinfo)
        axiosSecure.post('/donorRequest', userinfo)
        .then((res) => {
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User has been created",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
        .catch((error) => {
            // Handle error here
            console.error(error);
        });
    }

    // console.log(userinfo[0].name)
    const email = user?.email
    const name = user?.displayName

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-6'>
                        {/* <input {...register("name")} /> */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Requester Name</span>

                            </label>
                            <input
                                defaultValue={name}
                                type="text"
                                placeholder="Recipe Name"
                                {...register('name', { required: true })}
                                required
                                className="input input-bordered w-full " />

                        </div>
                        {/* <input {...register("email")} /> */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Requester Email</span>

                            </label>
                            <input
                                defaultValue={email}
                                type="text"
                                placeholder="Recipe Name"
                                {...register('email', { required: true })}
                                required
                                className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Recipent Name</span>

                            </label>
                            <input
                                type="text"
                                placeholder="Recipent Name"
                                {...register('RecipentName', { required: true })}
                                required
                                className="input input-bordered w-full " />

                        </div>
                        <div className="form-control w-full my-6">
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


                    </div>
                    <div className='flex gap-6'>
                        <div className="form-control w-full my-6">
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
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Hospital Name</span>

                            </label>
                            <input
                                type="text"
                                placeholder="Hospital Name"
                                {...register('hospitalName', { required: true })}
                                required
                                className="input input-bordered w-full " />

                        </div>

                    </div>
                    {/* time and date  */}
                    <div className='flex gap-6'>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text-alt">Date</span>
                            </label>
                            <input type="date" {...register('date', { required: true })} className="input input-bordered" />
                        </div>

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text-alt">Time</span>
                            </label>
                            <input type="time" {...register('time', { required: true })} className="input input-bordered" />
                        </div>
                    </div>

                    {/* recipe details  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text-alt">Address</span>
                        </label>
                        <textarea {...register('address', { required: true })} className="textarea textarea-bordered h-24" placeholder="Enter your address"></textarea>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text-alt">Why you need?</span>
                        </label>
                        <textarea {...register('requestMessage', { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                    </div>

                    <button className='btn bg-red-700 hover:bg-red-700 mt-10 text-white'>
                        Request <FaCaretRight></FaCaretRight>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DonorRequest;