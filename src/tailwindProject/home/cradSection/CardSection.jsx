import React from 'react';
import ImgMan from "../../../../public/tailwindProject/images/camera-man.jpg";
import Movies from '../movies/Movies';

const CardSection = () => {
   return (
      <div className="my-40">
         <div className=" border-2 border-black w-full max-w-7xl  mx-auto p-8">
            <div className="flex md:flex gap-4">
               <div
                  className="w-full md:w-1/2 h-96 bg-cover flex justify-center items-end"
                  style={{
                     backgroundImage: `url(${ImgMan})`,
                  }}
               >
                  <h1 className='py-3 px-8 bg-white font-medium text-xl rounded -mb-6 w-fit shadow-xl'>23 YEARS of EXPERIENCE</h1>
               </div>
               <div className="w-full md:w-1/2 mx-auto">
                  <h5 className="text-5xl font-medium py-6">ABOUT US</h5>
                  <h1 className="text-5xl font-bold py-4 font-bebas">
                     FIlming Experience <br /> Just Got better
                  </h1>
                  <button className="border py-2 px-4 text-xl font-medium rounded my-4 hover:bg-slate-500 hover:text-white">Discover More</button>
               </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 py-8 ">
               <div className="py-4">
                  <div className=" h-1 bg-black gap-3"></div>
                  <h3 className="text-4xl font-bebas font-semibold py-2">OUR VISIOn</h3>
                  <p className="font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
               </div>
               <div className="py-4">
                  <div className="w-full h-1 bg-black"></div>
                  <h3 className="text-4xl font-bebas font-semibold py-2">OUR VISIOn</h3>
                  <p className="font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
               </div>
               <div className="py-4">
                  <div className="w-full h-1 bg-black"></div>
                  <h3 className="text-4xl font-bebas font-semibold py-2">OUR VISIOn</h3>
                  <p className="font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
               </div>
            </div>
         </div>
         <Movies></Movies>
      </div>
   );
};

export default CardSection;