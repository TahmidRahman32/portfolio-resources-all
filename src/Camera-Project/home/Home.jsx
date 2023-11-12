import React from 'react';
import { FaBeer, FaShoppingCart, FaSearch } from "react-icons/fa";
import Banner from '../banner/Banner';
import { Link } from 'react-router-dom';

const Home = () => {
   return (
      <div className="mx-36 mt-10">
         <div className="flex  justify-between mx-0 px-0">
            <div>
               <h4 className="font-medium text-2xl">Influencer products</h4>
            </div>
            <div>
               <ul className="flex flex-row-reverse  gap-4 ">
                  <li>
                     <FaShoppingCart></FaShoppingCart>
                  </li>
                  <li>
                     <FaSearch></FaSearch>
                  </li>
                  <li>Sing in</li>
                  <li>Login</li>
                  <li>Product</li>
                  <li>
                     <Link to="/">Home</Link>
                  </li>
               </ul>
            </div>
         </div>
         <Banner></Banner>
      </div>
   );
};

export default Home;