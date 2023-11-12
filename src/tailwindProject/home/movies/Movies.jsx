import React from "react";
import bgFooter from "../../../../public/tailwindProject/images/footer-bg.jpg";
import movies1 from "../../../../public/tailwindProject/images/fractured.jpg";
import movies2 from "../../../../public/tailwindProject/images/inception.jpg";
import movies3 from "../../../../public/tailwindProject/images/interstellar.jpg";
import movies4 from "../../../../public/tailwindProject/images/tenet.jpg";
import icon1 from "../../../../public/tailwindProject/images/icons/camera.png";
import icon2 from "../../../../public/tailwindProject/images/icons/3d-glasss.png";
import icon3 from "../../../../public/tailwindProject/images/icons/count-down.png";
import icon4 from "../../../../public/tailwindProject/images/icons/count-down.png";
import icon5 from "../../../../public/tailwindProject/images/icons/director-chair.png";
import icon6 from "../../../../public/tailwindProject/images/icons/film.png";
import icon7 from "../../../../public/tailwindProject/images/icons/rim.png";
import icon8 from "../../../../public/tailwindProject/images/icons/theater.png";


const Movies = () => {
   return (
      <div>
         <div className="bg-gray  py-8 my-10 w-full max-w-7xl mx-auto px-8">
            <div className="flex justify-between">
               <div className="">
                  <h4 className="font-semibold text-1xl text-white">OUR MOVIES</h4>
                  <h1 className="font-semibold text-4xl text-white">Movie collection</h1>
               </div>
               <div>
                  <button className="border text-white py-2 px-4 text-xl font-medium rounded my-4 hover:bg-slate-500 hover:text-white">Discover More</button>
               </div>
            </div>
            <div className="grid md:grid-cols-4 gap-4 py-5">
               <div className="p-4 border-2 border-white">
                  <img src={movies1} alt="" />
               </div>
               <div className="p-4 border-2 border-white">
                  <img src={movies2} alt="" />
               </div>
               <div className="p-4 border-2 border-white">
                  <img src={movies3} alt="" />
               </div>
               <div className="p-4 border-2 border-white">
                  <img src={movies4} alt="" />
               </div>
            </div>
         </div>
         <div className="w-full max-w-7xl mx-auto">
            <h4 className="text-center font-medium text-xl mt-20">services</h4>
            <h1 className="text-center font-bold text-5xl font-bebas mb-20 mt-4">what we offer</h1>
            <div className="grid md:grid-cols-4 items-center gap-12">
               <div className=" border border-black text-center py-5 px-3">
                  {" "}
                  <img className="mx-auto" src={icon1} alt="" />
                  <h3 className="font-bebas font-bold text-xl">movies director</h3>
                  <p className="font-montserrat ">Ex quam platea aliquet viverra si dictumst lobortis quis aliquam dis eget. </p>
               </div>
               <div className=" border border-black text-center py-5 px-3">
                  {" "}
                  <img className="mx-auto" src={icon2} alt="" />
                  <h3 className="font-bebas font-bold text-xl">movies director</h3>
                  <p className="font-montserrat ">Ex quam platea aliquet viverra si dictumst lobortis quis aliquam dis eget. </p>
               </div>
               <div className=" border border-black text-center py-5 px-3">
                  {" "}
                  <img className="mx-auto" src={icon3} alt="" />
                  <h3 className="font-bebas font-bold text-xl">movies director</h3>
                  <p className="font-montserrat ">Ex quam platea aliquet viverra si dictumst lobortis quis aliquam dis eget. </p>
               </div>
               <div className=" border border-black text-center py-5 px-3">
                  {" "}
                  <img className="mx-auto" src={icon4} alt="" />
                  <h3 className="font-bebas font-bold text-xl">movies director</h3>
                  <p className="font-montserrat ">Ex quam platea aliquet viverra si dictumst lobortis quis aliquam dis eget. </p>
               </div>
               <div className=" border border-black text-center py-5 px-3">
                  {" "}
                  <img className="mx-auto" src={icon5} alt="" />
                  <h3 className="font-bebas font-bold text-xl">movies director</h3>
                  <p className="font-montserrat ">Ex quam platea aliquet viverra si dictumst lobortis quis aliquam dis eget. </p>
               </div>
               <div className=" border border-black text-center py-5 px-3">
                  {" "}
                  <img className="mx-auto" src={icon6} alt="" />
                  <h3 className="font-bebas font-bold text-xl">movies director</h3>
                  <p className="font-montserrat ">Ex quam platea aliquet viverra si dictumst lobortis quis aliquam dis eget. </p>
               </div>
               <div className=" border border-black text-center py-5 px-3">
                  {" "}
                  <img className="mx-auto" src={icon7} alt="" />
                  <h3 className="font-bebas font-bold text-xl">movies director</h3>
                  <p className="font-montserrat ">Ex quam platea aliquet viverra si dictumst lobortis quis aliquam dis eget. </p>
               </div>
               <div className=" border border-black text-center py-5 px-3">
                  {" "}
                  <img className="mx-auto" src={icon8} alt="" />
                  <h3 className="font-bebas font-bold text-xl">movies director</h3>
                  <p className="font-montserrat ">Ex quam platea aliquet viverra si dictumst lobortis quis aliquam dis eget. </p>
               </div>
            </div>
         </div>
         <footer className=" w-full max-w-7xl mx-auto h-auto my-12" style={{ backgroundImage: `url(${bgFooter})` }}>
            <div className="text-center">
               <h1 className="text-4xl font-bold font-bebas text-white py-4">jhaka naka production</h1>
               <h4 className="text-1xl font-bold font-bebas text-white py-4">next level experience</h4>
               <p className="text-white font-montserrat pb-16 px-52">Feugiat nibh litora semper proin nullam facilisi <br /> volutpat ex ullamcorper.</p>
               <p className="text-white py-2">Copyright © 2021 Jhaka Naka Production, All rights reserved. Present by Mir Hussain</p>
            </div>
         </footer>
      </div>
   );
};

export default Movies;
