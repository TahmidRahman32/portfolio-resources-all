import React from 'react';
import img5 from "../../public/cameraImg/gear.png";
import { Link } from 'react-router-dom';

const BlogCard = () => {
   return (
      <div className="bg-blue-950 flex justify-center text-center items-center m-auto h-screen">
         <div className="flex border p-6 gap-8 h-3/5 items-center">
            <div className="">
         <button className='bg-pink-600 py-2 px-4 rounded'> <Link to='/'>Home</Link> </button>
               <div>
                  <h2 className="text-white font-semibold text-3xl py-4">All Thinks Are Possible If You believe</h2>
                  <p className="text-slate-400 py-4 ">
                     There are many variations of passages of Lorem Ipsum available, but the majority <br />
                     have suffered alteration in some form, by injected humour, or randomised words
                  </p>
               </div>
               <div className="flex gap-4 pt-8 justify-center">
                  <div>
                     <h2 className="text-white font-semibold text-2xl">100k+</h2>
                     <p className="text-white font-semibold">CUSTOMER</p>
                  </div>
                  <div>
                     <h2 className="text-white font-semibold text-2xl">100k+</h2>
                     <p className="text-white font-semibold">CUSTOMER</p>
                  </div>
                  <div>
                     <h2 className="text-white font-semibold text-2xl">100k+</h2>
                     <p className="text-white font-semibold">CUSTOMER</p>
                  </div>
                  <div>
                     <h2 className="text-white font-semibold text-2xl">100k+</h2>
                     <p className="text-white font-semibold">CUSTOMER</p>
                  </div>
                  
               </div>
            </div>
            <div>
               <img className="psi" src={img5} alt="" />
            </div>
         </div>
      </div>
   );
};

export default BlogCard;