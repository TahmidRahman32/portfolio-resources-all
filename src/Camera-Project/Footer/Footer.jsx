import React from 'react';
import { FaBeer, FaInstagram, FaSpotify, FaTwitterSquare, FaYoutube } from "react-icons/fa";
// import { SlSocialDribbble } from "react-icons/fa";

const Footer = () => {
   return (
      <div className="bg-slate-900 h-full py-8 my-6 rounded">
         <div className="text-center">
            <h2 className="text-white text-2xl font-semibold">Influencer products</h2>

            <p className="text-white">
               <small>Copyright © 2020 influencer products</small>
            </p>
            <p className="text-white">
               <small>All rights reserved</small>
            </p>
            <div className="flex gap-4 justify-center my-3">
               <FaInstagram className="text-white"></FaInstagram>
               <FaSpotify className="text-white"></FaSpotify>
               <FaTwitterSquare className="text-white"></FaTwitterSquare>
               <FaYoutube className="text-white"></FaYoutube>
            </div>
         </div>
      </div>
   );
};

export default Footer;