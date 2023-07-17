import React from 'react';

const Statistics = () => {
    return (
        <div className='flex w-full justify-center  z-100 relative container mx-auto mt-[-30px]'>
            <div className='sm:w-2/5'></div>
            <div className='w-3/5 p-10 flex text-center justify-evenly shadow-2xl '>
                <div className=''>
                <h2 className='text-[#04A6C2] text-3xl font-bold pb-3  '>250</h2>
                <p className=''>Best Doctor</p>
                </div>
                <div className='' >
                <h2 className='text-[#04A6C2] text-3xl font-bold pb-3 '>15</h2>
                <p className=''>Clinic Location</p>
                </div>
                <div className='' >
                <h2 className='text-[#04A6C2] text-3xl pb-3 font-bold'>20</h2>
                <p className=''>Surgery Room</p>
                </div>
                <div className=''>
                <h2 className='text-[#04A6C2] text-3xl pb-3 font-bold'>+1500</h2>
                <p className=''>Patient Capasity</p>
                </div>
                
            </div>
        </div>
    );
};

export default Statistics;

