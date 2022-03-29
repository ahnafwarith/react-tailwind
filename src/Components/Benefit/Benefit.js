import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid'

const Benefit = (props) => {
    return (
        < div >
            <p className='flex items-center'>
                <CheckCircleIcon className='mr-2 w-4 h-4 text-blue-500'></CheckCircleIcon>
                {props.benefit}
            </p>
        </div >
    );
};

export default Benefit;