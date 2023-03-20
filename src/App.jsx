import React from "react";
import {BrowserRouter , Routes , Route, Link } from 'react-router-dom'

import {FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa'

import {logo} from './assets/'
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";


const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to={'/'}>
          <img src={logo} alt="logo"
          className="w-28 object-contain" />
        </Link>
        <Link to={"/createPost"} className="font-inter font-medium bg-[#6464ff] text-white px-4 py-2 rounded-md ">
            Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-110px)] max-h-[calc(100vh-110px)] overflow-y-scroll">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/createPost" element={<CreatePost/>}/>
          </Routes>
      </main>
      <footer className=" flex  justify-center items-center border-t border-t-[#e6ebf4]">
       <p className="my-1.5 text-[#666e75] text-[15px] max-w-[500px]"> Made With Love By Ahsaan. Follow on Socials : </p>
       <div className="flex gap-4 py-1.5 px-3">
        <a href="https://www.instagram.com/ahsaanjee045/" target={"_blank"} className=" text-[#666e75] text-[16px] max-w-[500px] hover:text-gray-800 hover:scale-125 transition duration-300"><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/ahsaan-web-developer/" target={"_blank"} className=" text-[#666e75] text-[16px] max-w-[500px] hover:text-gray-800 hover:scale-125 transition duration-300"><FaLinkedinIn/></a>
        <a href="https://github.com/ahsaanjee045" target={"_blank"} className=" text-[#666e75] text-[16px] max-w-[500px] hover:text-gray-800 hover:scale-125 transition duration-300"><FaGithub/></a> 
       </div>
      </footer>
    </BrowserRouter>
  );
};

export default App;
