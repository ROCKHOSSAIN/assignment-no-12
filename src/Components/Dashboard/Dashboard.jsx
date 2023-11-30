import { CgProfile } from "react-icons/cg";
import { FaHome } from 'react-icons/fa';
import { IoCreateSharp } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { RiHandHeartFill, RiLogoutCircleRLine } from "react-icons/ri";
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
// import useAdmin from '../Admin/useAdmin/useAdmin';
// import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { FcManager } from "react-icons/fc";
import { MdOutlineEditNote } from "react-icons/md";
import { AuthContext } from '../Provider/AuthProvider';
const Dashboard = () => {
    const role = useLoaderData()
    const {user} = useContext(AuthContext)
    // const [isAdmin,setAdmin] = useState([])
    // const [adminRole,setAdminRole] = useState("")
    // useEffect(() => {

    //     fetch('https://assignment-no-12-server.vercel.app/allUser')
    //         .then(res => res.json())
    //         .then(data => {
    //             setAdmin(data)
    //             // setLoading(false)
    //         })
    // }, [])
    // console.log(isAdmin)
    // console.log(adminRole)
  

        const filteremail = role?.filter((userinfo)=>userinfo.email ===  user?.email);
        console.log(filteremail)
    const Role = filteremail.map?.(({role})=>role)

   console.log(Role)




    // const [isAdmin] = useAdmin();

    return (
        <div className='flex'>
            {/* dashboard side bar */}
            <div className='w-48 md:w-64 min-h-screen bg-sky-300'>
                <ul className='menu md:p-5 md:text-xl'>
                    {Role=="Admin" ? 
                        <>
                            <li>
                                <NavLink to="dashboard">
                                    <MdDashboardCustomize></MdDashboardCustomize>
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="profile">
                                    <CgProfile></CgProfile>
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="all-users">
                                    <CgProfile></CgProfile>
                                 <h4 className='md:text-base'>All Users</h4>   
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="all-blood-donation-request">
                                    <MdOutlineEditNote></MdOutlineEditNote>
                                <h4 className='md:text-base'>  All  Donation Request</h4>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="content-management">
                                    <FcManager></FcManager>
                                <h4 className='text-base'>Content Management</h4>
                                </NavLink>
                            </li>
                            <div className="divider"></div>
                            <li>
                                <NavLink to="/">
                                    <FaHome></FaHome>
                                    User Home
                                </NavLink>
                            </li>
                        </>
                 : 
                        <>
                            <li>
                                <NavLink to="dashboard">
                                    <MdDashboardCustomize></MdDashboardCustomize>
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="profile">
                                    <CgProfile></CgProfile>
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="create-donation-request">
                                    <IoCreateSharp></IoCreateSharp>
                                    Create Request
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="my-donation-requests">
                                    <RiHandHeartFill></RiHandHeartFill>
                                    My Request
                                </NavLink>
                            </li>
                            <div className="divider"></div>
                            <li>
                                <NavLink to="/">
                                    <FaHome></FaHome>
                                    User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">
                                    <RiLogoutCircleRLine></RiLogoutCircleRLine>
                                    LogOut
                                </NavLink>
                            </li>
                        </>
                    }
                </ul>
            </div>
            <div className='flex-1 md:p-8'>
                {/* dashboard content  */}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
