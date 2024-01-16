import React from "react";

const Offersec = () => {
  return (
    <div className=" lg:pb-24 md:pb-16 pb-10 overflow-x-clip">
      <div className="container max-w-[1320px] mx-auto px-3">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="md:w-1/2 w-full px-3">
            <div className="bg-[url(./assets/images/colbg.webp)] bg-size bg-center bg-no-repeat sm:pl-[107px] pl-10 sm:pt-6 pt-6 sm:pb-[71px] pb-4">
              <p className="font-poppins text-xl leading-normal font-normal  sm:after:w-[95px]  after:h-[2px] after:bg-black after:absolute relative after:left-[-103px] after:top-[14px] sm:mb-5 mb-2" data-aos="zoom-in-right">
                Festival Offer
              </p>
              <p className="md:text-[35px] text-[25px] font-poppins font-bold text-[#BD7D41] leading-normal sm:mb-[15px] mb-2" data-aos="zoom-in-left">
                Upto 40% Off
              </p>
              <p className=" font-poppins sm:text-lg text-base font-normal leading-normal text-[#000000B2] max-w-[262px] sm:mb-[38px] mb-5" data-aos="zoom-in-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <button className="font-poppins text-white sm:text-xl text-lg font-medium leading-normal text-center py-2.5 px-3 hover:text-[#BD7D41] shadow-[inset_0_18rem_0_0_#BD7D41] border-[2px] border-transparent hover:shadow-[inset_0_0_0_0] duration-500 hover:border-[#BD7D41]">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="md:w-1/2 w-full px-3 md:mt-0 mt-5">
            <div className="bg-[url(./assets/images/colbg2.webp)]  bg-size bg-center bg-no-repeat sm:pl-[107px] pl-10 sm:pt-6 pt-6 sm:pb-[71px] pb-4">
              <p className="font-poppins text-xl leading-normal font-normal sm:after:w-[95px] after:h-[2px] after:bg-black after:absolute relative after:left-[-103px] after:top-[14px] sm:mb-5 mb-2" data-aos="zoom-in-right">
                Festival Offer
              </p>
              <p className="md:text-[35px] text-[25px] font-poppins font-bold text-[#BD7D41] leading-normal sm:mb-[15px] mb-2" data-aos="zoom-in-left" >
                Upto 40% Off
              </p>
              <p className=" font-poppins sm:text-lg text-base font-normal leading-normal text-[#000000B2] max-w-[262px] sm:mb-[38px] mb-5" data-aos="zoom-in-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <button className="font-poppins text-white sm:text-xl text-lg font-medium leading-normal text-center sm:py-2.5 py-2 sm:px-3 px-2 hover:text-[#BD7D41] shadow-[inset_0_18rem_0_0_#BD7D41] border-[2px] border-transparent hover:shadow-[inset_0_0_0_0] duration-500 hover:border-[#BD7D41]" >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offersec;
