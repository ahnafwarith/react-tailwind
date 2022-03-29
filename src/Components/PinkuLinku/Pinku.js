import React from 'react';

const Pinku = (props) => {
    const { name, link } = props.link
    return (
        <div>
            <li className='mr-16'><a href={link}>{name}</a></li>
        </div>
    );
};

export default Pinku;