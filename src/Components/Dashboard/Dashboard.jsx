import {  FaHome } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { MdDashboardCustomize } from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";
import { RiHandHeartFill } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
const Dashboard = () => {
    const isAdmin = true
    return (
        <div className='flex'>
            {/* dashboard side bar */}
            <div className='w-32 md:w-64 min-h-screen bg-sky-300'>
                <ul className='menu md:p-5 md:text-xl'>

                  

                   {
                    isAdmin ?
                    <>
     <li>
                        <NavLink to="dashboard">
                            <MdDashboardCustomize></MdDashboardCustomize>
                            Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="profile">
                            <CgProfile></CgProfile>
                            Profile</NavLink>
                    </li>
                   
                    <li>
                        <NavLink to="create-donation-request">
                            <IoCreateSharp></IoCreateSharp>
                            Create Request</NavLink>
                    </li>
                    <li>
                        <NavLink to="my-donation-requests">
                            <RiHandHeartFill></RiHandHeartFill>
                            My Request</NavLink>
                    </li>

                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <RiLogoutCircleRLine></RiLogoutCircleRLine>
                            LogOut</NavLink>
                    </li>
                    </>
                    :
                    <>
                     <li>
                        <NavLink to="dashboard">
                            <MdDashboardCustomize></MdDashboardCustomize>
                            Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="profile">
                            <CgProfile></CgProfile>
                            Profile</NavLink>
                    </li>
                   
                    <li>
                        <NavLink to="create-donation-request">
                            <IoCreateSharp></IoCreateSharp>
                            Create Request</NavLink>
                    </li>
                    <li>
                        <NavLink to="my-donation-requests">
                            <RiHandHeartFill></RiHandHeartFill>
                            My Request</NavLink>
                    </li>

                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <RiLogoutCircleRLine></RiLogoutCircleRLine>
                            LogOut</NavLink>
                    </li>
                    </>



                   }



                </ul>
            </div>
            <div className='flex-1 p-8'>
                {/* dashboard content  */}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;