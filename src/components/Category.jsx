import React from "react";
import img1 from '../assets/img1.png';
import img2 from '../assets/img3.png';
import img3 from '../assets/img5.png';
import img4 from '../assets/img7.png';
import img5 from '../assets/img2.png';
import img6 from '../assets/img4.png';
import img7 from '../assets/img6.png';
import img8 from '../assets/img8.png';

const data = [
  { id: 1, name: "Graphic & Design", img: img1 },
  { id: 2, name: "Cartoon Animation", img: img2 },
  { id: 3, name: "Illustration", img: img3 },
  { id: 4, name: "Flyers & Voucher", img: img4 },
  { id: 5, name: "Logo Design", img: img5 },
  { id: 6, name: "Social Graphics", img: img6 },
  { id: 7, name: "Article Writing", img: img7 },
  { id: 8, name: "Video Editing", img: img8 },
];

const Category = () => {
  return (
    <div>
      <div>
        <h1 className="flex ml-[50px] gap-3 text-4xl justify-center font-semibold">
          Choose Different <span className=" text-blue-500">Category</span>
        </h1>
      </div>
      <div className="mx-auto justify-center mt-[80px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {data.map((category) => (
          <div
            key={category.id}
            className="relative ml-[50px] md:ml-[100px] flex flex-col items-center border rounded-lg shadow-md w-[190px] h-[180px] overflow-hidden group cursor-pointer"
          >
            <img
              src={category.img}
              alt={category.name}
              className="object-cover h-[184px] rounded-xl transition duration-500 group-hover:blur-sm"
            />
            <h1 className="absolute inset-0 flex items-center justify-center font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {category.name}
            </h1>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[100px] mb-[40px]">
        <button className="bg-blue-500 rounded-lg h-[50px] shadow-lg w-[170px] justify-center items-center text-white font-semibold">
          More Categories
        </button>
      </div>
    </div>
  );
};

export default Category;
