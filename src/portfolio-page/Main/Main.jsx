import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
// import Home from '../../Camera-Project/home/Home';
// import Home from '../../Camera-Project/home/Home';


const Main = () => {
   return (
      <div>
         <Header></Header> 
         <Outlet></Outlet>
      </div>
   );
};

export default Main;