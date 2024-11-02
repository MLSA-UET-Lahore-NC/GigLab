import React from "react";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";
import { FaArrowRightLong } from "react-icons/fa6";

const data = [
  {
    id: 1,
    name: "img11",
    img: img13,
    desTitle: "Bunny.Design",
    des: "UI/UX Designer",
  },
  {
    id: 2,
    name: "img12",
    img: img12,
    desTitle: "Bhaskar Tiwari",
    des: "Graphic Designer",
  },
  {
    id: 3,
    name: "img13",
    img: img11,
    desTitle: "Aksara Joshi",
    des: "Graphic Designer",
  },
];
const Portfolio = () => {
  return (
    <div className="mb-[100px] px-4 md:px-10 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold ml-[70px] md:ml-[] text-gray-500 mt-[150px] mb-2">
          Logos, website, book covers & more!
        </h2>
        <h1 className="text-5xl ml-[70px] md:ml-[] font-semibold mb-10">
          Checkout The Best <span className="text-sky-500">Portfolios</span>{" "}
          Here
        </h1>
      </div>
      <div className="grid grid-cols-1 ml-[80px] sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item) => {
          return (
            <div key={item.id} className="relative rounded-lg w-[300px] bg-white shadow-xl">
              <img
                src={item.img}
                alt={item.name}
                className="object-cover w-full h-48 rounded-t-lg"
              />
              <div className="flex justify-between items-center p-4">
                <h1 className="text-2xl font-semibold">{item.desTitle}</h1>
                <FaArrowRightLong className="text-blue-500 text-2xl" />
              </div>
              <p className="p-4 text-gray-600">{item.des}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
