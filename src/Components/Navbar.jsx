import React from 'react';
import logo from '/logo.png'
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
           <div className="navbar w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <a href="http://"></a>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><Link to ='/'>Home</Link></li>
                    <li><Link to ='/allapps'>Apps</Link></li>
                    <li><Link to ='/instalations'>Instalation</Link></li>
                </ul>
                </div>
                <Link to='/' className='flex items-center'>
                    <img className='w-10' src={logo} alt="logo" />
                    <h1 className=" font-bold text-2xl px-2">HERO.IO</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                <li><Link to ='/'><i className="fa-solid fa-house"></i>Home</Link></li>
                <li><Link to ='/allapps'><i className="fa-brands fa-app-store"></i>Apps</Link></li>
                <li><Link to='/instalations'><i className="fa-brands fa-instalod"></i>Instalation</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="http://github.com/jubayer726" className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"><i className="fa-brands fa-github"></i>Contibuite</a>
            </div>
            </div>
        </div>
    );
};

export default Navbar;
