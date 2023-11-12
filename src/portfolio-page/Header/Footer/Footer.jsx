import React from 'react';
import { FaBeer, FaDownload, FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
   return (
      <div className="bg-orange-50 p-28">
         <div className="grid grid-cols-2 gap-10">
            <div>
               <h2 className="text-3xl font-semibold mb-5">Lets Connect</h2>
               <p>
                  <small className="text-slate-600">Please fill out the form on this section to contact with me or call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.</small>
               </p>
               <div className='flex gap-3 '>
                  <FaFacebook></FaFacebook>
                  <FaTwitter></FaTwitter>
                  <FaInstagram></FaInstagram>

               
               </div>
            </div>
            <div>
               <h2 className="text-3xl font-semibold mb-5">Let’s Message me</h2>
               <input className="px-6 py-2 my-4 w-80" type="text" placeholder="Your Name" />
               <br />
               <input className="px-6 py-2 my-4 w-80" type="password" placeholder="Your Gmail" />
               <br />
               <input className="px-6 py-12 my-4 w-80" type="text" placeholder="Massage" /> <br />
               <button className="text-white bg-orange-600 py-2 px-6 rounded">Submit</button>
            </div>
         </div>
      </div>
   );
};

export default Footer;