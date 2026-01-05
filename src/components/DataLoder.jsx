import React from 'react';
import { PacmanLoader } from 'react-spinners';

const DataLoder = () => {
    return (
       <div className='bg-transparent col-span-full w-full min-h-[50vh] flex justify-center items-center'>
            <PacmanLoader color='#059669' size={25} />
        </div>
    );
};

export default DataLoder;