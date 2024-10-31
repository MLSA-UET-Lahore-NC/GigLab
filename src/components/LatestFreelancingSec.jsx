import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import img from '../assets/react.svg';

function LatestFreelancingSec() {
  const freelancerDetails = [
    { id: 1, img, title: "Logo Design", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla dolore obcaecati", bet: "$500" },
    { id: 2, img, title: "Web Design", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla dolore obcaecati", bet: "$200" },
    { id: 3, img, title: "AutoCat Design", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla dolore obcaecati", bet: "$300" },
    { id: 4, img, title: "Card Design", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla dolore obcaecati", bet: "$400" },
    { id: 5, img, title: "Web Design", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla dolore obcaecati", bet: "$500" },
    { id: 6, img, title: "Card Design", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla dolore obcaecati", bet: "$600" },
    { id: 7, img, title: "Web Design", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla dolore obcaecati", bet: "$700" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < freelancerDetails.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const currentItems = freelancerDetails.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="mx-8 pt-6">
      <div className="px-3">
        <h1 className="text-xl text-blue-200 pb-2">The Latest Freelancer Work!</h1>
        <h1 className="text-3xl text-dark-500">Recently Posted <span className="text-blue-500">Works</span></h1>
      </div>

      <div className="absolute right-0 top-16 mx-9 flex space-x-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-blue-300 text-black rounded-full px-4 py-2 hover:bg-blue-400 disabled:opacity-50"
        >
          &lt; {/* Left arrow */}
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= freelancerDetails.length}
          className="bg-blue-300 text-black rounded-full px-4 py-2 hover:bg-blue-400 ml-2 disabled:opacity-50"
        >
          &gt; {/* Right arrow */}
        </button>
      </div>

      <Carousel
        className="mt-8"
        autoplay={false}
        loop={false}
        slidesPerView={1} // Show one slide at a time for carousel control
      >
       {currentItems.map((item) => (
          <div key={item.id} className="bg-blue-0 text-center p-6 mx-2 rounded-lg border hover:scale-95 cursor-pointer" style={{ width: '300px' }}> {/* Fixed width for each item */}
            <img src={item.img} alt={item.title} className="w-28 h-28 object-contain mb-2 mx-auto items-center" />
            <h4 className="text-lg font-bold py-2">{item.title}</h4>
            <p className="line-clamp-3 ">{item.description}</p>
            <p className="text-green-500 font-semibold pt-3">Highest Bet: <span className="text-blue-400"> {item.bet}</span></p>
            <p className="text-center text-blue-500 font-semibold pt-2 hover:scale-95 cursor-pointer">
              <a href="#apply">Apply Now</a>
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default LatestFreelancingSec;
