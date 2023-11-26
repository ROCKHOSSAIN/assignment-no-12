import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import  { useContext } from 'react';

const Navbar = () => {
     const handleLogOut=()=>{
        logOut()
      .then(() => { })
      .catch(error => console.log(error)) 
    }
    const {user,logOut} = useContext(AuthContext)
    const navlinks = <>
        <li className='text-lg font- text-sky-900'><NavLink to='/'>Home</NavLink></li>
        <li className='text-lg font- text-sky-900'><NavLink to='/donationsRequests'>Donation Requests</NavLink></li>
        <li className='text-lg font- text-sky-900'><NavLink to='/blog'>Blog</NavLink></li>
    </>
   
    return (
        <div>
            <div className="navbar bg-sky-200 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <img src="https://i.ibb.co/stNGjZz/logo-removebg-preview.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 active:bg-red">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    
                  {user ?
                  <>
                  <li className='text-xl list-none font-xl text-sky-900'><NavLink to='/dashboard'>Dashboard</NavLink></li>
                  <li className='text-xl list-none font-xl text-sky-900'><NavLink to='/login'>Fundings</NavLink></li>
      <span> { user?.displayName }</span>
      {/* <span> { user?.photoURL }</span> */}

                  <button onClick={handleLogOut} className='text-white text-lg font-semibold'>Logout</button>
                  </>
                  :
                  <Link to='/login'>
                    <li className='text-xl list-none font-xl text-sky-900'><NavLink to='/login'>Login</NavLink></li>
                    </Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;