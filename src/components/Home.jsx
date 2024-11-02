import React from "react";
import firstimg from "../assets/firstImg.png";
import { IoSearch } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuFileSearch } from "react-icons/lu";
import { VscGitStashApply } from "react-icons/vsc";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="mb-16 md:mb-32 ml-4 md:ml-10 text-center md:text-left md:mr-48">
          <h1 className="text-4xl ml-[50px] md:ml-[5px] md:text-5xl leading-relaxed font-bold">
            Are you looking for <br /> Freelancers?
          </h1>
          <p className="w-[350px] md:w-[400px] tracking-widest mx-auto md:mx-0 mt-2 text-base md:text-lg">
            Hire Great Freelancer, Fast. Spacelance helps you hire elite
            freelancer at a moment's notice.
          </p>
        </div>
        <img
          src={firstimg}
          alt="Loading Error..."
          className="h-[360px] w-[360px] md:h-[480px] md:w-[480px] md:ml-[-150px] mb-12 md:mb-0"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-3 justify-center items-center mt-[70px] md:mt-[-130px] ml-[40px] md:ml-0">
  <div className="flex flex-col w-full md:flex-row gap-3 items-center">
    <div className="flex w-full md:w-auto">
      <input
        className="h-14 px-4 rounded-l-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 md:w-[300px] md:ml-[280px]"
        type="search"
        placeholder="Search freelance work"
      />
      <button className="h-14 bg-sky-500 rounded-r-md flex items-center px-4">
        <IoSearch className="text-white w-6 h-6" />
      </button>
    </div>
    <button className="bg-sky-500 text-white w-full md:w-[150px] font-bold rounded-md h-14 mt-4 md:mt-0">
      Hire a freelancer
    </button>
  </div>
</div>



<div className="flex items-center shadow-xl justify-between bg-white m-4 md:m-12 h-auto rounded-md flex-col md:flex-row mt-[40px] ml-[90px]">
  <div className="justify-between h-auto flex flex-col md:flex-row gap-6 w-full p-4">
    <div className="flex flex-col justify-center items-center text-center">
      <RiLockPasswordLine className="text-3xl w-[50px] h-[40px] rounded-full bg-[#e0f7fa] hover:cursor-pointer hover:shadow-xl hover:transition duration-200 ease-in-out" />
      <h1 className="text-3xl font-bold text-black">Create Account</h1>
      <p>First, you have to create a <br /> account here.</p>
    </div>

    <div className="flex flex-col justify-center items-center text-center">
      <LuFileSearch className="text-3xl w-[50px] h-[40px] rounded-full bg-[#e0f7fa] hover:cursor-pointer hover:shadow-xl hover:transition duration-200 ease-in-out" />
      <h1 className="text-3xl font-bold text-black">Search work</h1>
      <p>Search the best <br /> freelance work here</p>
    </div>
    
    <div className="flex flex-col justify-center items-center text-center">
      <VscGitStashApply className="text-3xl w-[50px] h-[40px] rounded-full bg-[#e0f7fa] hover:cursor-pointer hover:shadow-xl hover:transition duration-200 ease-in-out" />
      <h1 className="text-3xl font-bold text-black">Save and apply</h1>
      <p>Apply or save <br /> and start your work</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;
