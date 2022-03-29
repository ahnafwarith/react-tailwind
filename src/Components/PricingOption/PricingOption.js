import React from 'react';

const PricingOption = (props) => {
    const { name, price } = props.pricingOption
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h1 className='text-2xl bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h1>
            <p>
                <span className='text-4xl font-bold'>{price}</span>
                <span className='text-gray-500'>/mo</span>
            </p>
        </div>
    );
};

export default PricingOption;