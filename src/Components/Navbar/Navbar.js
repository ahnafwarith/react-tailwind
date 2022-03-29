import React, { useState } from 'react';
import Pinku from '../PinkuLinku/Pinku';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    /* const [open, setOpen] = useState(false); */
    const [close, handleMenu] = useState(true)
    const nav = [
        { name: 'Home', id: 1, link: '/home' },
        { name: 'Order', id: 2, link: '/order' },
        { name: 'About', id: 3, link: '/about' },
        { name: 'Contact', id: 4, link: '/contact' }
    ]
    return (
        <nav>
            {/* <div onClick={() => setOpen(!open)} className='md:hidden h-6 w-6'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div> */}
            <div onClick={() => handleMenu(!close)} className='w-6 h-6 md:hidden'>
                {close ? <MenuIcon></MenuIcon> : <XIcon></XIcon>}
            </div>
            <ul className={`md:flex justify-center absolute duration-500 ease-in ${close ? 'top-[-120px]' : 'top-6'}`}>
                {
                    nav.map(link => <Pinku id={link.id} link={link}></Pinku>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;