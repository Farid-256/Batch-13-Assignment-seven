import React from 'react';
import facebook from '../assets/facebook.png';
import instagarm from '../assets/instagram.png';
import twiter from '../assets/twitter.png';
import footerLogo from '../assets/logo-xl.png'

const Footer = () => {
    return (
        <footer className='bg-green-900 py-10 px-5 md:px-20'>
            {/* Top Section */}
            <div className='flex flex-col justify-center items-center space-y-5 text-center'>
                <img src={footerLogo} alt="" />
                <p className='text-gray-400 max-w-md'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <p className='text-white font-medium'>Social Links</p>
                <div className='flex gap-5'>
                    <img src={facebook} alt="Facebook" className='w-8 cursor-pointer hover:opacity-80' />
                    <img src={instagarm} alt="Instagram" className='w-8 cursor-pointer hover:opacity-80' />
                    <img src={twiter} alt="Twitter" className='w-8 cursor-pointer hover:opacity-80' />
                </div>
            </div>

            {/* Separator line */}
            <div className="border-t border-green-800 my-8"></div>

            {/* Bottom Section */}
            {/* মোবাইল হলে flex-col, ডেস্কটপ হলে flex-row */}
            <div className='flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4'>
                <p className='text-center'>© 2026 KeenKeeper. All rights reserved.</p>

                <div className='flex gap-6 flex-wrap justify-center'>
                    <p className='hover:text-white cursor-pointer transition'>Privacy Policy</p>
                    <p className='hover:text-white cursor-pointer transition'>Terms of Service</p>
                    <p className='hover:text-white cursor-pointer transition'>Cookies</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;