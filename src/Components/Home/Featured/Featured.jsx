import React from 'react';

const Featured = () => {
    return (
        <div className='container mx-auto py-10 '>
            <h1 className='text-center font-semibold text-[#cc7045] text-3xl font-poppins mb-10'>Featured</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mx-auto'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/B6RmvJH/sangue-bolsa-0-800-0.jpg" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Blood Storage</h2>
                        <p> We store the safest blood of all blood groups which you can use for any kind of treatments or in an emergency</p>
                        <button className='bg-[#7071E8] text-white rounded-3xl p-3'>Enquire Now</button>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/1062Pwh/g9.webp" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Provision of Red Blood Cells </h2>
                        <p>Lowering the count of red blood cells could be dangerous.We also provide red blood cells for various treatments</p>
                        <button className='bg-[#7071E8] text-white rounded-3xl p-3'>Enquire Now</button>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/0fmDysm/g2.webp" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Blood Donation</h2>
                        <p> Donation of blood is a selfless service that we do for mankind.We allow you to save a life by donation blood to the ones who need it</p>
                        <button className='bg-[#7071E8] text-white rounded-3xl p-3'>Enquire Now</button>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/CzgByZ7/istockphoto-483319605-612x612.jpg" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Provision of Platelets </h2>
                        <p>Platelets play an vital role in blocking the blood flow at the time of injuries.We provide it to maintain its count in your blood</p>
                        <button className='bg-[#7071E8] text-white rounded-3xl p-3'>Enquire Now</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;