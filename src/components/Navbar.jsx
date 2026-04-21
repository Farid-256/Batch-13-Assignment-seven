import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { MdOutlineAddHome } from "react-icons/md"
import { RiTimeLine } from "react-icons/ri"
import { TfiStatsUp } from "react-icons/tfi"
import { HiMenu, HiX } from "react-icons/hi"

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-2 px-5 py-2 rounded-md font-medium transition-all ${
            isActive
                ? 'bg-green-700 text-white shadow-md'
                : 'text-gray-700 border border-amber-200 hover:bg-gray-100'
        }`

    return (
        <section className='bg-white shadow-sm'>
            <div className='px-20 mx-auto py-10 flex justify-between items-center'>

              
                <h2 className='text-2xl md:text-3xl font-bold'>
                    Keen<span className='text-green-700'>Keeper</span>
                </h2>

               
                <div className='hidden md:flex items-center gap-6'>
                    <NavLink to="/" className={navLinkClass}>
                        <MdOutlineAddHome className="text-xl" /> Home
                    </NavLink>

                    <NavLink to="/timeline" className={navLinkClass}>
                        <RiTimeLine className="text-xl" /> Timeline
                    </NavLink>

                    <NavLink to="/stats" className={navLinkClass}>
                        <TfiStatsUp className="text-xl" /> Stats
                    </NavLink>
                </div>

               
                <div className='md:hidden'>
                    <button onClick={() => setOpen(!open)}>
                        {open ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>
            </div>

           
            {
                open && (
                    <div className='md:hidden flex flex-col items-center gap-4 pb-4'>
                        <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>
                            <MdOutlineAddHome /> Home
                        </NavLink>

                        <NavLink onClick={() => setOpen(false)} to="/timeline" className={navLinkClass}>
                            <RiTimeLine /> Timeline
                        </NavLink>

                        <NavLink onClick={() => setOpen(false)} to="/stats" className={navLinkClass}>
                            <TfiStatsUp /> Stats
                        </NavLink>
                    </div>
                )
            }
        </section>
    );
};

export default Navbar;