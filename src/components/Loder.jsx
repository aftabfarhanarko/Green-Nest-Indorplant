import React from 'react';
import { PacmanLoader } from 'react-spinners';

const Loder = () => {
    return (
        <div className='bg-gray-50 w-full min-h-screen flex justify-center items-center'>
            <PacmanLoader color='#059669' size={30} />
        </div>
    );
};

export default Loder;