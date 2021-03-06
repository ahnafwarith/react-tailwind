import React from 'react';
import Benefit from '../Benefit/Benefit';
import { ArrowRightIcon } from '@heroicons/react/solid'

const PricingOption = (props) => {
    const { name, price } = props.pricingOption
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h1 className='text-2xl bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h1>
            <p>
                <span className='text-4xl font-bold'>{price}</span>
                <span className='text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benefits: </h3>
                {props.pricingOption.benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)}
            </div>
            <div>
                <button className='flex w-full bg-blue-500 justify-center py-2 rounded hover:bg-blue-800'>Buy Now <ArrowRightIcon className='h-4 w-4'></ArrowRightIcon></button>
            </div>
        </div>
    );
};

export default PricingOption;