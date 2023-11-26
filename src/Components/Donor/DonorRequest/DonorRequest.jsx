import React from 'react';
import { useForm } from 'react-hook-form';
import { FaCaretRight } from "react-icons/fa";
const DonorRequest = () => {
    const { register, handleSubmit,reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} />
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>

                        </label>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register('name',{required:true})}
                            required
                            className="input input-bordered w-full " />

                    </div>
                    <div className='flex gap-6'>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>

                            </label>
                          

                            <select defaultValue="default" {...register('category',{required:true})} 
                            className="select select-bordered w-full ">
                                <option disabled value="default">Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>

                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price</span>

                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price',{required:true})}
                                className="input input-bordered w-full " />

                        </div>

                    </div>
                    {/* recipe details  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text-alt">Recipe Details</span>
                        </label>
                        <textarea {...register('recipe',{required:true})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        
                    </div>
                    <div className='form-control w-full my-6'>
                    <input {...register('image',{required:true})} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className='btn bg-yellow-800 text-white'>
                       Request <FaCaretRight></FaCaretRight>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DonorRequest;