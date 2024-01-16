import welcomeimg from "../assets/images/welcome.webp";

const Welcome = () => {
  return (
    <div className=" lg:pb-64 md:pb-56 pb-10 overflow-x-clip">
      <div className="container max-w-[1320px] px-3 mx-auto pt-[134px] ">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="lg:w-1/2 w-full px-3 flex z-10 justify-center" data-aos="zoom-in">
            <div className="relative">
                          <div className=" bg-boxgradient -z-10 lg:max-w-[416px] max-w-[300px] max-h-[336px] w-full h-full absolute left-[-50px]  top-[-64px]"></div>

              <img
                src={welcomeimg}
                alt="welcom"
                className="shadow-[3px_8px_26px_0px_#0000001F] w-full max-md:max-h-[300px]"
              />
              <div className="max-w-[254px] md:max-h-[78px] max-h-[50px] w-full h-full bg-white absolute bottom-0 right-0 flex py-4 px-[15px] items-center justify-between">
                <p className="font-poppins text-sm  leading-normal font-normal text-center text-[#243040]">
                  Explore Video
                </p>
                <div className="w-[30%] border-t border-[#243040] border-solid"></div>
                <a href="">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="22.5" cy="22.5" r="22.5" fill="#BD7D41" />
                    <path
                      d="M33 22.5L17.25 31.5933L17.25 13.4067L33 22.5Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
            
                  </div>
                  <div className="lg:w-1/2 w-full px-3 lg:mt-0 mt-8">
            <div className="flex items-center gap-[11px]  lg:justify-start justify-center md:mb-[19px]">
              <div className="w-[13%] border border-solid border-black"></div>
              <h3 className=" font-poppins sm:text-xl text-lg text-center leading-normal font-normal text-[#BD7D41]" data-aos="fade-right" >
                Welcome Our Story
              </h3>
            </div>
            <div className="lg:justify-start flex flex-col justify-center lg:items-start items-center">
                <h2 className=" max-w-[436px] lg:text-[35px] md:text-2xl text-xl lg:text-start text-center font-poppins font-bold leading-normal text-[#243040] sm:mb-[19px] mb-2" data-aos="fade-left">
                  We create the product you tell us you wish existed.
                </h2>
                <p className="font-poppins md:text-lg text-base lg:text-start text-center leading-normal font-normal text-[#000000B2] max-w-[596px] md:mb-[34px] mb-4" data-aos="flip-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  faucibus, urna at pulvinar porta, augue lorem ullamcorper orci,
                  non rhoncus nisi neque sit amet nibh. Phasellus consectetur semper
                  ante et mattis
                </p>
                <button className="font-poppins text-white text-xl leading-normal text-center shadow-[inset_0_18rem_0_0_#BD7D41] border-[2px] border-transparent hover:shadow-[inset_0_0_0_0] duration-500 hover:border-[#BD7D41] hover:text-[#BD7D41] py-[19px] px-12 font-semibold " data-aos="flip-right">
                  READ MORE
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
