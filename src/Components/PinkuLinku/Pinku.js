import React from 'react';

const Pinku = (props) => {
    const { name, link } = props.link
    return (
        <div>
            <li><a href={link}>{name}</a></li>
        </div>
    );
};

export default Pinku;