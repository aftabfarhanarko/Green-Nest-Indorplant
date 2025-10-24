import React from 'react';
import { PacmanLoader } from 'react-spinners';

const DataLoder = () => {
    return (
       <div className='bg-gradient-to-br  col-span-full to-whit w-full col-span-11  min-h-screen flex justify-center items-center'>
            <PacmanLoader color='#36D7B7' />
        </div>
    );
};

export default DataLoder;