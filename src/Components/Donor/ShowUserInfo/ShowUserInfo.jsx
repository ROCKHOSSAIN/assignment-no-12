import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowUserInfo = () => {
    const {date,RecipentName,upazila,_id,district,hospitalName,time,address,requestMessage} = useLoaderData();
    console.log(date,RecipentName,upazila,_id,district,hospitalName,time,address,requestMessage)
    return (
        <div>
            <h1 className='md:text-2xl my-5'>RECIPENT NAME: {RecipentName}</h1>
            <h1 className='md:text-2xl my-5'>UPAZILA: {upazila}</h1>
            <h1 className='md:text-2xl my-5'>DISTRICT: {district}</h1>
            <h1 className='md:text-2xl my-5'>RECIPENT Name: {RecipentName}</h1>
            <h1 className='md:text-2xl my-5'>HOSPITALNAME: {hospitalName}</h1>
            <h1 className='md:text-2xl my-5'>DATE: {date}</h1>
            <h1 className='md:text-2xl my-5'>TIME: {time}</h1>
            <h1 className='md:text-2xl my-5'>ADDRESS: {address}</h1>
            <h1 className='md:text-2xl my-5'>REQUEST MESSAGE: {requestMessage}</h1>
        </div>
    );
};

export default ShowUserInfo;