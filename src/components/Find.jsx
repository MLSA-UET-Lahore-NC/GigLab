import React from "react";
import Findimg from "../assets/Findimg.png";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";

const Find = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left px-4 md:px-0">
      <div className="flex flex-col items-center md:items-start mt-12 md:mt-[150px]">
        <img className="w-full md:w-[580px] md:ml-[150px] mb-12" src={Findimg} alt="Loading..." />
        <div className="relative flex justify-center">
          <img
            className="h-24 md:h-24 mt-4 md:mt-[210px] w-auto md:ml-[-140px]"
            src={frame1}
            alt="Loading..."
          />
          <img
            className="h-24 w-32 mt-2 md:mt-[30px] ml-0 md:ml-[-250px] md:m-auto"
            src={frame2}
            alt="Loading..."
          />
        </div>
      </div>
      <div className="w-full md:w-[450px] md:mr-[130px] mt-[70px] md:mt-[-90px]">
        <h1 className="font-bold text-4xl md:text-6xl">
          Find The Best <br />
          <span className="text-sky-500">Freelancer</span> Here
        </h1>
        <p className="md:text-left text-left ml-[60px] md:ml-[-2px] mt-[20px] mb-[150px] text-gray-500 text-sm md:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          nesciunt est at sequi! Enim vitae laudantium explicabo nesciunt
          laboriosam, voluptate atque eum quod eos, inventore repudiandae ipsum in
          reiciendis omnis. Nesciunt totam modi, deserunt maiores vitae a
          dignissimos voluptate accusamus mollitia aperiam similique.
        </p>
      </div>
    </div>
  );
};

export default Find;
