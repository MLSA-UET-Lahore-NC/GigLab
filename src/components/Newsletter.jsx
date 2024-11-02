import React from "react";

const Newsletter = () => {
  return (
    <div className="mb-16">
      <div className="grid ml-[80px] md:mr-[80px] justify-center items-center text-center">
        <h1 className="mt-[60px] text-5xl font-semibold">
          Newsletter Subscription
        </h1>
        <p className="text-xl text-gray-500">
          Subscribe to our newsletter to get new freelance work and projects
        </p>
      </div>
      <div className="grid justify-center ml-[80px] items-center mt-[70px]">
        <input 
          className="w-full sm:w-[400px] md:mr-[80px] rounded-md text-lg text-center h-[45px] px-2"
          type="email" 
          placeholder="Enter Your email address" 
        />
        <button className="flex mr-[200px] justify-center items-center mt-[20px] rounded-lg w-full sm:w-[180px] font-medium text-white text-lg h-[45px] bg-sky-500 mx-auto">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
