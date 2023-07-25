import Image from 'next/image';
import React from 'react';

const Feature = (props) => {
    // console.log(props)
    return (
        <div className=' block  sm:flex text-center sm:text-left w-4/3 gap-x-0 mt-5'>

            <div className=' grid place-content-center  place-items-center pb-2 sm:pb-0 sm:place-content-start'>
            <Image src={props.img} height={8} width={8} className="h-8 w-8  sm:mr-2  text-[#04A6C2]" alt="icon"/>
            </div>
            <div className=''>
            <h6 className='block font-bold text-xl p-2 text-black sm:w-5/6 '>{props.name}</h6>
            <p className='block w-full sm:w-2/3 p-2 '>{props.title}</p>
            </div>
            
            
            

        </div>
    );
};

export default Feature;
