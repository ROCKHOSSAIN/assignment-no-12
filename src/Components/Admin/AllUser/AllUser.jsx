import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import axios from 'axios';
import { GrUserAdmin } from "react-icons/gr";
import { MdBlock } from "react-icons/md";
import { TbLockOpen } from "react-icons/tb";
import { GiHumanTarget } from "react-icons/gi";
import { FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const [allusers, setAllUser] = useState([])
  const { data: allUser = [], refetch } = useQuery({
    queryKey: ['allUser'],//users er modde sob data jabe
    queryFn: async () => {
      const res = await axiosSecure.get('/allUser')
      return res.data
    }
  })
  const handleMakeAdmin = user => {
    axiosSecure.patch(`/allUser/admin/${user._id}`)
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }
  const handleMakeVolunteer = user => {
    axiosSecure.patch(`/allUser/volunteer/${user._id}`)
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Volunteer now`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }
  const handleMakeblock = user => {
    axiosSecure.patch(`/allUser/block/${user._id}`)
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Volunteer now`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }
  const handleMakeUnblock = user => {
    axiosSecure.patch(`/allUser/unblock/${user._id}`)
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Volunteer now`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }
  useEffect(() => {
    fetch('http://localhost:5000/allUser')
      .then(res => res.json())
      .then(data => setAllUser(data))
  }, [])
  console.log(allusers)
  return (
    <div>
      <div className='overflow-x-scroll'>
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Profile</th>
              <th>Email</th>
              <th>Name</th>
              <th>Block</th>
              <th>Unblock</th>
              {/* <th>Role</th> */}
              <th>Donor to Volunteer</th>
              <th>Anyone to Admin</th>

            </tr>
          </thead>
          <tbody>


            {
              allusers?.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <th><img className='rounded-full w-24' src={user.imageUrl} alt="" /></th>


                <td>{user?.email}</td>
                <td>{user?.name}</td>
                <td>
                 {user.status === 'block' ? 'Blocked' : <button onClick={() => handleMakeblock(user)} className="btn bg-red-500  hover:bg-red-500 "><MdBlock className='text-white text-3xl '></MdBlock></button>}
                </td>
                <td>
                  {user.status === 'unblock' ? 'UNBLOCKED' :<button onClick={() => handleMakeUnblock(user)} className="btn bg-green-500  hover:bg-green-500 "><TbLockOpen className='text-white text-3xl '></TbLockOpen></button>}
                </td>
                {/* <td>{user?.role}</td> */}
                <td>
                  {user.role === 'Volunteer' ? 'Volunteer' : <button onClick={() => handleMakeVolunteer(user)} className="btn bg-orange-500  hover:bg-orange-500 "><GiHumanTarget className='text-white text-3xl '></GiHumanTarget></button>}

                </td>
                <td>
                  {user.role === 'Admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-orange-500  hover:bg-orange-500 "><GrUserAdmin className='text-white text-3xl '></GrUserAdmin></button>}

                </td>


              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;