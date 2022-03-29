import React from 'react';
import Pinku from '../PinkuLinku/Pinku';

const Navbar = () => {
    const nav = [
        { name: 'home', id: 1, link: '/home' },
        { name: 'order', id: 2, link: '/order' },
        { name: 'about', id: 3, link: '/about' },
        { name: 'contact', id: 4, link: '/contact' }
    ]
    return (
        <nav>
            <ul>
                {
                    nav.map(link => <Pinku id={link.id} link={link}></Pinku>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;