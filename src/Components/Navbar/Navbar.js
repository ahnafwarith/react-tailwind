import React from 'react';
import Pinku from '../PinkuLinku/Pinku';
import { MenuIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const nav = [
        { name: 'Home', id: 1, link: '/home' },
        { name: 'Order', id: 2, link: '/order' },
        { name: 'About', id: 3, link: '/about' },
        { name: 'Contact', id: 4, link: '/contact' }
    ]
    return (
        <nav>
            <div className='md:hidden h-6 w-6'>
                <MenuIcon></MenuIcon>
            </div>
            <ul className='md:flex justify-center'>
                {
                    nav.map(link => <Pinku id={link.id} link={link}></Pinku>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;