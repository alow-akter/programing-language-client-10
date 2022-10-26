import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to="/home" className="btn btn-ghost normal-case text-xl bg-gray-500 text-white">Programing Language </Link>
                </div>
                <div className="navbar-end">
                    <label
                        htmlFor="AcceptConditions"
                        className="relative h-8 w-14 cursor-pointer">
                        <input
                            type="checkbox"
                            id="AcceptConditions"
                            className="peer sr-only" />

                        <span className="absolute inset-0 rounded-full bg-purple-600 transition peer-checked:bg-slate-900"></span>

                        <span className="absolute inset-0 m-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-6"></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;