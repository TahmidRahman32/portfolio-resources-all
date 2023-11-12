import React from 'react';
import Card from '../card/Card';

const About = () => {
   return (
      <div>
         <main className="mx-40 mt-12">
            <h2 className="text-center text-5xl font-bold mb-5">About Me</h2>
            <p className="p-8 px-72 text-slate-500">
               I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional resulfs while working with me.
               Delivering work within time and budget which meets clients requirements in our mata.
            </p>
            <div className="flex text-center justify-center gap-8 my-8">
               <div className="">
                  <p className="text-slate-600">Name</p>
                  <h4 className="font-medium text-xl">Mary Hardy </h4>
               </div>
               <div>
                  <p className="text-slate-600">email</p>
                  <h4 className="font-medium text-xl">info@gmail.com</h4>
               </div>
               <div>
                  <p className="text-slate-600">Date of birth:</p>
                  <h4 className="font-medium text-xl">11 November 1987</h4>
               </div>
               <div>
                  <p className="text-slate-600">from</p>
                  <h4 className="font-medium text-xl">Los Angeles, USA</h4>
               </div>
            </div>
            <div className='bg-yellow-50 pb-28'>
               <h2 className="text-center text-5xl font-bold mb-5">What I do</h2>
               <p className=" px-72 text-slate-500">
                  I have more than 10 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies i use. Want to find out more about my experience? Check out my online
                  resume and project portfolio.
               </p>
            </div>
         </main>
         <Card></Card>
      </div>
   );
};

export default About;