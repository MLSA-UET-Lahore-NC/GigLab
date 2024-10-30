import React from "react";
import footerimg from "../assets/logo.png";
function Footer() {
  return (
    <>
      {" "}
      <footer className="mainfootcont flex items-center justify-center min-h-[45dvh] bg-blue-100">
        <div className="bg-gray-100 w-[80%]">
          <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
            <div className="p-5 w-full ">
              <h3 className="font-bold text-xl text-indigo-600">
                <img src={footerimg} alt="" className="w-[60%]" />
              </h3>
              <p className="mt-3 text-xs">
                Powerful Freelance Marketplace System with ability to change the
                Users (Freelancers & Clients)
              </p>
              <div className="bg-gray-100 pt-2">
                <div
                  className="flex  m-0 border-2 border-solid border-black w-1/2 text-gray-800 text-sm flex-col
      max-w-screen-lg items-center"
                >
                  <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                    <a href="/#" className="w-6 mx-1">
                      <svg
                        className="fill-current cursor-pointer text-gray-900 hover:text-indigo-600"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        version="1.1"
                        style={{
                          fillRule: "evenodd",
                          clipRule: " evenodd",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 2,
                        }}
                      >
                        <path
                          id="Twitter"
                          d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168
                  -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676
                  0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411
                  -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166
                  0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929
                  -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379
                  0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009
                  -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049
                  -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838
                  1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0
                  -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0
                  6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298
                  0.771,-0.67 1.054,-1.093Z"
                        ></path>
                      </svg>
                    </a>
                    <a href="/#" className="w-6 mx-1">
                      <svg
                        className="fill-current cursor-pointer text-gray-900 hover:text-indigo-600"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        version="1.1"
                        style={{
                          fillRule: "evenodd",
                          clipRule: " evenodd",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 2,
                        }}
                      >
                        <path
                          id="Facebook"
                          d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373
                  12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                  0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                  -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"
                        ></path>
                      </svg>
                    </a>

                    <a href="/#" className="w-6 mx-1">
                      <svg
                        className="fill-current cursor-pointer text-gray-900 hover:text-indigo-600"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        version="1.1"
                        style={{
                          fillRule: "evenodd",
                          clipRule: " evenodd",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 2,
                        }}
                      >
                        <path
                          id="Shape"
                          d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
                  3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
                  -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
                  -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
                  -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
                  0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
                  3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
                  -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
                  -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
                  1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
                  -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
                  -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
                  0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
                  0.4,1.5l0,4.5l2.9,0Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  {/* <div className="my-5">© Copyright 2020. All Rights Reserved.</div> */}
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="text-sm uppercase text-indigo-600 font-bold">
                Resources
              </div>
              <a className="mt-7 block" href="/#">
                Find Freelancers
              </a>
              <a className=" block" href="/#">
                Tutorials
              </a>
              <a className=" block" href="/#">
                Support
                {/* <span className="text-teal-600 text-xs p-1">New</span> */}
              </a>
            </div>
            <div className="p-5">
              <div className="text-sm uppercase text-indigo-600 font-bold">
                Support
              </div>
              <a className="my-3 block" href="/#">
                Help Center <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Privacy Policy{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Conditions <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </div>
            <div className="p-5">
              <div className="text-sm uppercase text-indigo-600 font-bold">
                Contact us
              </div>
              <a className="my-3 block" href="/#">
                XXX XXXX, Floor 4 San Francisco, CA
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                contact@company.com
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
