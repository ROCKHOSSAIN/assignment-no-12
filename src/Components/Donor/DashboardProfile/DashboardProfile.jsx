import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Provider/AuthProvider';


const MyDonation = () => {
  const { user } = useContext(AuthContext);
  const [userdata,setuserdata] = useState([])

  useEffect(() => {

    fetch('https://assignment-no-12-server.vercel.app/donorRequest')
        .then(res => res.json())
        .then(data => {
            setuserdata(data)
            // setLoading(false)
        })
}, [])
const email = user?.email
const donorName= user?.displayName
const filteremail = userdata?.filter((userdata)=>userdata.email===email );
    console.log(filteremail)
  console.log(userdata)


  

  return (
        <div>
            <div>
           <h1 className='text-3xl font-semibold text-center uppercase mb-5'>Welcome ,{user.displayName}</h1>
           <h1 className='text-base  text-center  mb-10'>Recent Donation lists</h1>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>No.</th>
        <th>Recipent Name</th>
        <th>Recipent Location</th>
        <th>Donation Date</th>
        <th>Donation time</th>
        <th>Donation information</th>
        <th>Donation status</th>
       
      </tr>
    </thead>
    <tbody>


{
    filteremail?.slice(-3).map((user,index) =>  <tr key={user._id}>
        <th>{index+1}</th>
        <td>{user.RecipentName}</td>
        <td>{user.address}</td>
        <td>{user.date}</td>
        <td>{user.time}</td>
        <div className='flex flex-col'>

        <td>{user.email}</td>
        <td>{donorName}</td>
        </div>
        <td>{user.status}</td>
       
        
      </tr> )
}    
     
    </tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default MyDonation;