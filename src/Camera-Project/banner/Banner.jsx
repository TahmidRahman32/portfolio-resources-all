import React from 'react';
import camera from "../../../public/cameraImg/main-camera.png";
import svg1 from "../../../public/logos/Alibaba.svg";
import svg2 from "../../../public/logos/Amazon.svg";
import svg3 from "../../../public/logos/Daraz.pk Logo.svg";
import svg4 from "../../../public/logos/Ebay.svg";
import svg5 from "../../../public/logos/Rakuten.svg";
import svg6 from "../../../public/logos/Target.svg";
import svg7 from "../../../public/logos/Walmart.svg";
// import svg6 from "../../../public/logos/Target.svg";
import { FaBeer, FaArrowRight } from "react-icons/fa";
import Card from '../Card/Card';

const Banner = () => {
   return (
      <div>
         <div className="flex mt-8 items-center gap-44 ml-28">
            <div>
               <h1 className="font-bold text-5xl my-4">
                  Start your Journey as <br /> Influencer
               </h1>
               <p className="pr-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem vestibulum sed <br /> scelerisque eros. Lectus faucibus.
               </p>
               <button className="px-6 py-2 bg-pink-700 rounded-lg text-white mt-4 flex items-center gap-2">
                  Preebook now <FaArrowRight></FaArrowRight>
               </button>
            </div>
            <div className="mt-12">
               <img src={camera} alt="" />
            </div>
         </div>
         <div className='flex justify-center gap-12 mt-6'>
            <img src={svg1} alt="" />
            <img src={svg2} alt="" />
            <img src={svg3} alt="" />
            <img src={svg4} alt="" />
            <img src={svg5} alt="" />
            <img src={svg6} alt="" />
            <img src={svg7} alt="" />
         </div>
         <Card></Card>
      </div>
   );
};

export default Banner;