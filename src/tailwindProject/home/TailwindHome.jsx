import React from "react";
import bgImg from "../../../public/tailwindProject/images/banner.jpg";
import CardSection from "./cradSection/CardSection";

const TailwindHome = () => {
   return (
      <div className="">
         <nav className="flex  md:max-w-7xl w-full justify-between h-20 items-center rounded mx-auto  fixed top-0 right-0 left-0 bottom-0 bg-white px-4">
            <h4 className="font-bebas text-2xl font-semibold ">Jhaka Naka Production</h4>
            <ul className="flex md: gap-6">
               <li className="font-montserrat text-2xl font-semibold">About US </li>
               <li className="font-montserrat text-2xl font-semibold">our Movies</li>
               <li className="font-montserrat text-2xl font-semibold ">Services</li>
            </ul>
         </nav>
         <section className="h-screen bg-red-400 pt-20 mt-20 bg-cover w-full mx-auto max-w-7xl" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className=" pl-36 h-full flex items-center">
               <div>
                  <h3 className="font-bebas text-4xl font-semibold text-white">Movie production studio</h3>
                  <h1 className="font-bebas text-8xl font-semibold text-white">
                     Films MAde to <br /> <span className="text-yellow">Perfection</span>
                  </h1>
                  <p className="text-white font-medium py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  <button className="my-6 rounded py-2 px-4 border border-white text-yellow text-xl font-medium transition-all hover:bg-white hover:text-black">Discover More</button>
               </div>
            </div>
         </section>
         <CardSection></CardSection>
      </div>
   );
};

export default TailwindHome;
