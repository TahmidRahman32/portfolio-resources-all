import React from "react";
// import { FaDownload } from "@react-icons/all-files/fa/FaBeer";
import { FaBeer, FaDownload, FaPhoneAlt } from "react-icons/fa";
import hardyImg from "../../../public/images/hardy.png";
import bgDeveloper from "../../../public/images/developer.png";
import bg from "../../../public/images/header_bg.png";
import About from "./about/About";
import { Link } from "react-router-dom";
// import bg from "../../../public/images/header_bg.png"

const Header = () => {
   return (
      <div>
         <div
            className="w-full md:max-w-7xl mx-auto bg-orange-100 pl-16 pt-4 mt-8 bg-no-repeat bg-left"
            style={{
               height: "auto",
               backgroundImage: `url(${bgDeveloper})`,
            }}
         >
            <nav className="w-full md:max-w-7xl mx-auto flex justify-between items-center px-4">
               <div>
                  <h2 className="text-5xl font-semibold pl-4">
                     Ma<span className="text-orange-600">r</span>y
                  </h2>
               </div>
               <div>
                  <ul className="flex space-x-4 gap-4 items-center">
                     <li>
                        <Link to="/tailwind">Tailwind</Link>
                     </li>
                     <li>
                        <Link to="/blog">Blog</Link>
                     </li>
                     <li>
                        <button className="px-4 py-2 hover:bg-orange-400 hover:text-black text-white bg-orange-700 rounded">
                           <Link to="/home">Hire Me</Link>
                        </button>
                     </li>
                  </ul>
               </div>
            </nav>
            <main className="w-full md:max-w-7xl mx-auto flex items-center bg-no-repeat   bg-right-bottom" style={{ backgroundImage: `url(${bg})` }}>
               <div className="">
                  <h3 className="font-medium text-3xl ml-4">Hi, I am</h3>
                  <h1 className="font-semibold text-6xl py-5">Mary Hardy</h1>
                  <p>Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>
                  <div className="flex">
                     <button className="px-4 py-2 text-white mb-6 hover:bg-orange-400 hover:text-black bg-orange-600 rounded m-3 flex  gap-2">
                        <FaDownload></FaDownload> Download CV
                     </button>
                     <button className="px-6 py-0 text-xl hover:bg-orange-400 hover:text-black text-orange-600 m-4 mb-6 border-2 border-orange-500 rounded flex gap-2">
                        <FaPhoneAlt className="mt-1"></FaPhoneAlt> Contact
                     </button>
                  </div>
               </div>
               <div className="">
                  <img src={hardyImg} alt="" />
               </div>
            </main>
         </div>

         {/* <div className="mx-40 mt-12 bg-orange-100 pl-12 rounded  ">
            <nav className=" p-2 rounded m-4 flex justify-between">
               <h2 className="text-5xl font-semibold pl-4">
                  Ma<span className="text-orange-600">r</span>y
               </h2>
               <ul className="flex flex-row-reverse space-x-4 gap-4">
                  <li>
                     {" "}
                     <Link to="/tailwind">Tailwind</Link>{" "}
                  </li>
                  <li>
                     <Link to="/blog">Blog</Link>{" "}
                  </li>
                  <li>
                     <button className="px-4 py-2 text-white bg-orange-700 rounded">
                        <Link to="/home">Hire Me</Link>
                     </button>
                  </li>
               </ul>
            </nav>
            <div className="flex items-center ">
               <div className="">
                  <main className="">
                     <h3 className="font-medium text-3xl ml-4">Hi, I am</h3>
                     <h1 className="font-semibold text-6xl py-5">Mary Hardy</h1>
                     <p>Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>
                     <div className="flex">
                        <button className="px-4 py-2 text-white mb-6 bg-orange-600 rounded m-3 flex  gap-2">
                           <FaDownload></FaDownload> Download CV
                        </button>
                        <button className="px-6 py-0 text-xl text-orange-600 m-4 mb-6 border-2 border-orange-500 rounded flex gap-2">
                           <FaPhoneAlt className="mt-1"></FaPhoneAlt> Contact
                        </button>
                     </div>
                  </main>
               </div>
               <div>
                  <div
                     style={{
                        backgroundImage: `url(${bg})`,
                     }}
                  >
                     <img src={hardyImg} alt="" />
                  </div>
               </div>
            </div>
         </div> */}
         <About></About>
      </div>
   );
};

export default Header;
