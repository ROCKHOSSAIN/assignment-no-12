import { useContext, useEffect, useState } from 'react';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
// import useAxiosSecure from '../../hooks/useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Provider/AuthProvider';

import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
const AllDonationReq = () => {
  const axiosSecure = useAxiosSecure();
  const [statusFilter, setStatusFilter] = useState('all');
  const { user } = useContext(AuthContext);
  const [userdata, setuserdata] = useState([])

  useEffect(() => {

    fetch('https://assignment-no-12-server.vercel.app/donorRequest')
      .then(res => res.json())
      .then(data => {
        setuserdata(data)
        // setLoading(false)
      })
  }, [])
//   const email = user?.email
  const donorName = user?.displayName
//   const filteremail = userdata?.filter((userdata) => userdata.email === email &&
//     (statusFilter === 'all' || user.status === statusFilter));
//   console.log(filteremail)
  console.log(userdata)
  // useEffect(()=>{
  //   const filtretdata = filteremail?.filter((data)=>data.status === )
  // },[])


  //update
  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/donorRequest/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {

              // console.log(res)
              if (Array.isArray(userdata)) {
                const remainingUsers = userdata.filter(user => user._id !== id);
                setuserdata(remainingUsers);
              }

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"

              });
            }
          })
      }
    });
  }

  return (
    <div>
      <div>
        <div>
          <label>
            Filter by Status:
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
              <option value="canceled">Canceled</option>
            </select>
          </label>
        </div>
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
                <th>Edit</th>
                <th>Delete</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>


              {
                userdata.map((user, index) => <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.RecipentName}</td>
                  <td>{user.address}</td>
                  <td>{user.date}</td>
                  <td>{user.time}</td>
                  <div className='flex flex-col'>

                    <td>{user.email}</td>
                    <td>{donorName}</td>
                  </div>
                  <td>{user.status}</td>
                  <td>
                    <Link to={`/dashboard/updateDonation/${user._id}`}>
                      <button className="btn bg-orange-500  hover:bg-orange-500 "><FaRegEdit className='text-white text-xl'></FaRegEdit></button>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-md"><FaTrashAlt className='text-red-600 text-2xl'></FaTrashAlt></button>
                  </td>
                  <td>
                    <Link to={`/dashboard/showUserInfo/${user._id}`}>
                      <button className="btn bg-orange-500  hover:bg-orange-500 "><FaUsers className='text-white text-xl '></FaUsers></button>
                    </Link>

                  </td>

                </tr>)
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllDonationReq;