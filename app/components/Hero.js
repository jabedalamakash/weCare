import Image from 'next/image';
import React from 'react';
import Feature from './Feature';

import Calender from "../../public/calendar.png";
import Security from "../../public/security.png";
import User from "../../public/user.png";
import Placeholder from "../../public/placeholder.png"

const Hero = () => {
    return (
        <div>
                  <section className=" sm:px-40 flex  bg-[#F4FCFD] mx-auto items-center text-gray-600 body-font">
        <div className=" container sm:max-w-screen-xl mx-auto flex px-25 py-10 sm:flex-row flex-col items-center">
          <div className="lg:flex-grow  mx-auto md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font w-[35vh] text-2xl text-center md:text-left sm:block sm:text-4xl tracking-wide mb-4 font-extrabold text-gray-900">Protect Your Health And Take Care Of Your Health
              {/* <br className="md:hidden block lg:inline-block"/>And take Care Of */}
              {/* <br className="md:hidden block lg:inline-block"/>Your Health */}
            </h1>
            <div className=' pb-8   '>

              <div className='grid sm:grid-cols-2 place-content-center gap-1 grid-cols-1'>
                  <Feature img={Calender} name="Make an Appinment" title="Schedule With your Favorite Doctor Anytime."/>
                  <Feature img={Security} name="Health Gurantee Forever" title="We Always Provide The Best Warranty for You."/>
              </div>
              <div className='grid md:grid-cols-2 place-content-center grid-cols-1 gap-1 '>
              <Feature img={User} name="Find Your Best Doctor" title="We Always Provide The Warranty for You."/>
              <Feature img={Placeholder} name="Spread In Various Places" title="Now Clinics Are Available in Various Places."/>
              </div>
              
            </div>

            <div className="flex justify-center items-center">
              <button className="inline-flex  text-white bg-[#04A6C2] border-0 py-2 px-6 focus:outline-none hover:bg-[#00718A] rounded text-lg">Button</button>
              
            </div>
          </div>
          <div className="lg:max-w-lg md:w-1/2  sm:w-full">
            {/* <img className="object-cover object-center rounded" alt="hero" src="/image 1.png"/> */}
            <Image src="/image 1.png"
            width={530} height={794}
            alt='hero'
            layout='responsive'
            className="object-cover relative w-auto h-auto ml-3 object-center rounded"/>



          


                  </div>
                </div>
              </section>
              <div className='flex w-full justify-center  z-30 absolute container mx-auto mt-[-30px]'>
                  <div className='sm:w-2/5'></div>
                  <div className='w-screen sm:w-3/5 mx-20 p-6  sm:p-10 flex text-center justify-center sm:justify-evenly shadow-2xl '>
                      <div className=''>
                      <h2 className='text-[#04A6C2] text-2xl sm:text-3xl font-bold pb-3  '>250</h2>
                      <p className='text-base font-thin'>Best Doctor</p>
                      </div>
                      <div className='' >
                      <h2 className='text-[#04A6C2] text-2xl sm:text-3xl font-bold pb-3 '>15</h2>
                      <p className='text-base font-thin'>Clinic Location</p>
                      </div>
                      <div className='' >
                      <h2 className='text-[#04A6C2] text-2xl sm:text-3xl pb-3 font-bold'>20</h2>
                      <p className='text-base font-thin'>Surgery Room</p>
                      </div>
                      <div className=''>
                      <h2 className='text-[#04A6C2] text-2xl sm:text-3xl pb-3 font-bold'>+1500</h2>
                      <p className='text-base font-thin'>Patient Capasity</p>
                      </div>
                      
                  </div>
              </div>




        </div>
    );
};

export default Hero;