import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./portfolio-page/Main/Main.jsx";
import Home from "./Camera-Project/home/Home.jsx";
import BlogCard from "./Bolg/BlogCard.jsx";
import TailwindHome from "./tailwindProject/home/TailwindHome.jsx";
// import Header from './portfolio-page/Header/Header.jsx';
const router = createBrowserRouter([
  
   {
      path: "/",
      element: <Main></Main>,
     
   },
    {
      path: "/home",
      element: <Home></Home>,
   },
   {
      path: '/blog',
      element: <BlogCard></BlogCard>
   },
   {
      path: '/tailwind',
      element: <TailwindHome></TailwindHome>
   }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
