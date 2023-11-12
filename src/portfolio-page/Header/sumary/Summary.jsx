import React from "react";
import { FaBeer, FaDownload } from "react-icons/fa";
import Footer from "../Footer/Footer";

const Summary = () => {
   return (
      <div className="mx-40 mt-12">
         <h2 className="text-center text-4xl font-bold mb-5">A summary of My Resume</h2>
         <div className="grid grid-cols-2 gap-8">
            <div>
               <h2 className="font-semibold text-4xl my-8">My Education</h2>
               <div className="mb-6">
                  <h3 className="font-semibold text-3xl">Master in Computer Engineering</h3>
                  <h5 className="font-medium text-xl">Harvard University / 2015 - 2017</h5>
                  <p className="mb-4">
                     <small className="text-slate-500 ">List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</small>
                  </p>
                  <hr />
               </div>
               {/* 2 */}
               <div className="mb-6">
                  <h3 className="font-semibold text-3xl">Master in Computer Engineering</h3>
                  <h5 className="font-medium text-xl">Harvard University / 2015 - 2017</h5>
                  <p className="mb-4">
                     <small className="text-slate-500 ">List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</small>
                  </p>
                  <hr />
               </div>
               {/* 3 */}
               <div className="mb-6">
                  <h3 className="font-semibold text-3xl">Master in Computer Engineering</h3>
                  <h5 className="font-medium text-xl">Harvard University / 2015 - 2017</h5>
                  <p className="mb-4">
                     <small className="text-slate-500 ">List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</small>
                  </p>
                  <hr />
               </div>
            </div>
            {/* my experience */}
            <div>
               <h2 className="font-semibold text-4xl my-8">My Experience</h2>
               <div className="mb-6">
                  <h3 className="font-semibold text-3xl">Sr. Font End Developer</h3>
                  <h5 className="font-medium text-xl">Apple Inc / 2020 - Current</h5>
                  <p className="mb-4">
                     <small className="text-slate-500 ">List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</small>
                  </p>
                  <hr />
               </div>
               <div className="mb-6">
                  <h3 className="font-semibold text-3xl">Jr. Font End Developer</h3>
                  <h5 className="font-medium text-xl">Dribbble Inc / 2018 - 2022 </h5>
                  <p className="mb-4">
                     <small className="text-slate-500 ">List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</small>
                  </p>
                  <hr />
               </div>
               <div className="mb-6">
                  <h3 className="font-semibold text-3xl">HTML Developer</h3>
                  <h5 className="font-medium text-xl">Apple Inc / 2020 - Current</h5>
                  <p className="mb-4">
                     <small className="text-slate-500 ">List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</small>
                  </p>
                  <hr />
               </div>
            </div>
         </div>
         <button className=" ml-96 mb-12 bg-orange-500 py-2 px-5  rounded flex items-center gap-2 hover:bg-orange-400">
            <FaDownload></FaDownload>Download CV
         </button>
         <Footer></Footer>
      </div>
   );
};

export default Summary;
