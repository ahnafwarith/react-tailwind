import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'local deals', 'nibba', 'deal'
            ]
        },
        {
            id: 2, name: 'Regular', price: 999, benefits: [
                'local deals', 'nibba special', 'super deal'
            ]
        },
        {
            id: 3, name: 'Premium', price: 1999, benefits: [
                'foreign deals', 'nibba special premium', 'super deal', 'happy ending'
            ]
        }
    ]
    return (
        <div className='mt-8 bg-indigo-300 p-4 font-mono'>
            <h1 className='text-6xl text-white'>Best Deals of the town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dignissimos laboriosam, exercitationem assumenda saepe nulla incidunt ratione iusto minus adipisci.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(pricingOption => <PricingOption key={pricingOption.id} pricingOption={pricingOption}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;