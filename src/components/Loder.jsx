import React from 'react';
import { PacmanLoader } from 'react-spinners';

const Loder = () => {
    return (
        <div className='bg-gradient-to-br from-emerald-50 to-whit w-full  min-h-screen flex justify-center items-center'>
            <PacmanLoader color='#36D7B7' />
        </div>
    );
};

export default Loder;