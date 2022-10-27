import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handelLogout = () => {
        logOut()
            .then(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-[#A9B7B0] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="https://www.svgrepo.com/show/327372/logo-javascript.svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/course'>Course</Link>
                            <Link to='/blogs'>Blogs</Link>
                            <Link to='/login'>Login</Link>
                            <Link to='/SingUp'>SingUp</Link>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center gap-5">
                    <Link to="/home" className=" normal-case text-xl text-white hidden lg:block"><p className='pt-2 text-[#C20095]'>Programing Language</p>
                    </Link>
                    <div>
                        {
                            user?.uid ?
                                <>
                                    <h3 className='m-3'>{user?.displayName}</h3>
                                    <button onClick={handelLogout} className='bg-[#C20095] rounded px-3'>log out</button>
                                </>
                                :
                                <>
                                    <Link className='bg-[#8F9A98] hover:bg-[#f378d6] px-3 py-1 m-2 rounded' to='/login'>Login</Link>
                                    <Link className=' bg-[#8F9A98] hover:bg-[#f378d6] px-3 py-1 gap-3 rounded' to='/singUp'>SingUp</Link>

                                </>
                        }
                    </div>

                </div>
                <div className="navbar-end">
                    <label
                        htmlFor="AcceptConditions"
                        className="relative h-8 w-14 cursor-pointer">
                        <input
                            type="checkbox"
                            id="AcceptConditions"
                            className="peer sr-only" />
                        <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-slate-900"></span>

                        <span className="absolute inset-0 m-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-6"></span>

                    </label>
                    <FaUserAlt className='w-20 h-7'></FaUserAlt>
                </div>
            </div>
        </div>
    );
};

export default Header;