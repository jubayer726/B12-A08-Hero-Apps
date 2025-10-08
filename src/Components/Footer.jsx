import React from 'react';
import logo from '/logo.png'

const Footer = () => {
    return (
        <footer className="bg-[#001931] text-gray-200 px-8 py-12 ">
            <div className='max-w-11/12 mx-auto'>
            
                <div className="grid md:grid-cols-5 gap-16">
                        <div className='flex items-center'>
                            <img className='w-16' src={logo} alt="logo" />
                            <a className="btn btn-ghost text-xl">HERO.IO</a>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-2">Company</h4>
                            <ul className="space-y-1 text-sm">
                            <li>About Us</li>
                            <li>Our Mission</li>
                            <li>Contact Saled</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-2">Services</h4>
                            <ul className="space-y-1 text-sm">
                            <li>Products & Services</li>
                            <li>Customer Stories</li>
                            <li>Download Apps</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-2">Information</h4>
                            <ul className="space-y-1 text-sm">
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Join Us</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-2">Social Links</h4>
                            <ul className="space-y-1 text-sm">
                            <li><i className="fa-brands fa-square-x-twitter"></i>@HERO.IO — Ticket System</li>
                            <li><i className="fa-brands fa-linkedin"></i>@HERO.IO — Ticket System</li>
                            <li><i className="fa-brands fa-facebook"></i>@HERO.IO — Ticket System</li>
                            <li><i className="fa-solid fa-envelope"></i>support@hero.io.com</li>
                            </ul>
                        </div>
                </div>
                
                <div className="text-left md:text-center text-gray-300 text-m mt-8">
                © 2025 hero — Ticket System. All rights reserved.
                <br className="block md:hidden" /> All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;