import React from "react";
import slide1 from "../assets/images/slide1.webp";
import slide2 from "../assets/images/slide2.webp";
import slide3 from "../assets/images/slide3.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const slidedata = [{ img: slide1 }, { img: slide2 }, { img: slide3 }, { img: slide2 },];


const Latest = () => {
    const arrow = React.useRef(null)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        slidesToShow:2,
      }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow:1
        }
      }
    ]
  };
    const data = slidedata.map((slidedata,pa)=> (
          <div key={pa}
          className="card md:px-6 px-4 transition-all duration-700 md:mt-16 sm:mt-10 mt-5 py-4 hover:shadow-[6px_13px_38px_0px_#0000001F]

 bg-white shadow-[0px_0px_0px_0px_#0000001F]"
        >
          <img src={slidedata.img} alt="1" className="w-full" />
          <div className="flex justify-between lg:pt-5 md:pt-3 pt-2 items-center">
            <p className="text-black font-poppins md:text-xl text-lg font-medium">
              Single Sofa
            </p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="107"
                height="18"
                viewBox="0 0 107 18"
                fill="none"
              >
                <path
                  d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z"
                  fill="#FFD135"
                />
                <path
                  d="M40.3859 6.33831L34.6901 5.51709L32.1439 0.396152C32.0743 0.255944 31.9599 0.142442 31.8186 0.0734507C31.4642 -0.100141 31.0334 0.0445188 30.8562 0.396152L28.31 5.51709L22.6142 6.33831C22.4572 6.36057 22.3136 6.43401 22.2037 6.54529C22.0708 6.68079 21.9975 6.86309 22.0001 7.05213C22.0026 7.24117 22.0807 7.42149 22.2171 7.55345L26.3381 11.5394L25.3645 17.1677C25.3417 17.2987 25.3563 17.4333 25.4067 17.5564C25.4571 17.6795 25.5412 17.7862 25.6496 17.8643C25.7579 17.9424 25.8862 17.9887 26.0198 17.9982C26.1534 18.0077 26.287 17.9798 26.4054 17.9177L31.5 15.2605L36.5947 17.9177C36.7337 17.9912 36.8953 18.0157 37.0501 17.989C37.4404 17.9222 37.7029 17.555 37.6356 17.1677L36.662 11.5394L40.783 7.55345C40.8951 7.4444 40.9692 7.30197 40.9916 7.14618C41.0522 6.75671 40.7785 6.39618 40.3859 6.33831Z"
                  fill="#FFD135"
                />
                <path
                  d="M62.3859 6.33831L56.6901 5.51709L54.1439 0.396152C54.0743 0.255944 53.9599 0.142442 53.8186 0.0734507C53.4642 -0.100141 53.0334 0.0445188 52.8562 0.396152L50.31 5.51709L44.6142 6.33831C44.4572 6.36057 44.3136 6.43401 44.2037 6.54529C44.0708 6.68079 43.9975 6.86309 44.0001 7.05213C44.0026 7.24117 44.0807 7.42149 44.2171 7.55345L48.3381 11.5394L47.3645 17.1677C47.3417 17.2987 47.3563 17.4333 47.4067 17.5564C47.4571 17.6795 47.5412 17.7862 47.6496 17.8643C47.7579 17.9424 47.8862 17.9887 48.0198 17.9982C48.1534 18.0077 48.287 17.9798 48.4054 17.9177L53.5 15.2605L58.5947 17.9177C58.7337 17.9912 58.8953 18.0157 59.0501 17.989C59.4404 17.9222 59.7029 17.555 59.6356 17.1677L58.662 11.5394L62.783 7.55345C62.8951 7.4444 62.9692 7.30197 62.9916 7.14618C63.0522 6.75671 62.7785 6.39618 62.3859 6.33831Z"
                  fill="#FFD135"
                />
                <path
                  d="M84.3859 6.33831L78.6901 5.51709L76.1439 0.396152C76.0743 0.255944 75.9599 0.142442 75.8186 0.0734507C75.4642 -0.100141 75.0334 0.0445188 74.8562 0.396152L72.31 5.51709L66.6142 6.33831C66.4572 6.36057 66.3136 6.43401 66.2037 6.54529C66.0708 6.68079 65.9975 6.86309 66.0001 7.05213C66.0026 7.24117 66.0807 7.42149 66.2171 7.55345L70.3381 11.5394L69.3645 17.1677C69.3417 17.2987 69.3563 17.4333 69.4067 17.5564C69.4571 17.6795 69.5412 17.7862 69.6496 17.8643C69.7579 17.9424 69.8862 17.9887 70.0198 17.9982C70.1534 18.0077 70.287 17.9798 70.4054 17.9177L75.5 15.2605L80.5947 17.9177C80.7337 17.9912 80.8953 18.0157 81.0501 17.989C81.4404 17.9222 81.7029 17.555 81.6356 17.1677L80.662 11.5394L84.783 7.55345C84.8951 7.4444 84.9692 7.30197 84.9916 7.14618C85.0522 6.75671 84.7785 6.39618 84.3859 6.33831Z"
                  fill="#FFD135"
                />
                <path
                  d="M106.386 6.33831L100.69 5.51709L98.1439 0.396152C98.0743 0.255944 97.9599 0.142442 97.8186 0.0734507C97.4642 -0.100141 97.0334 0.0445188 96.8562 0.396152L94.31 5.51709L88.6142 6.33831C88.4572 6.36057 88.3136 6.43401 88.2037 6.54529C88.0708 6.68079 87.9975 6.86309 88.0001 7.05213C88.0026 7.24117 88.0807 7.42149 88.2171 7.55345L92.3381 11.5394L91.3645 17.1677C91.3417 17.2987 91.3563 17.4333 91.4067 17.5564C91.4571 17.6795 91.5412 17.7862 91.6496 17.8643C91.7579 17.9424 91.8862 17.9887 92.0198 17.9982C92.1534 18.0077 92.287 17.9798 92.4054 17.9177L97.5 15.2605L102.595 17.9177C102.734 17.9912 102.895 18.0157 103.05 17.989C103.44 17.9222 103.703 17.555 103.636 17.1677L102.662 11.5394L106.783 7.55345C106.895 7.4444 106.969 7.30197 106.992 7.14618C107.052 6.75671 106.778 6.39618 106.386 6.33831Z"
                  fill="#FFD135"
                />
              </svg>
            </span>
          </div>
          <p className="text-[#000000B2] font-poppins mg:text-lg text-base font-normal md:pt-4 sm:pt-3 pt-1">
            Lorem ipsum dolor{" "}
          </p>
          <div className="flex justify-between md:pt-4 pt-2 md:pb-12 pb-4  items-center">
            <p className="text-black font-poppins xl:text-[28px] md:text-xl text-lg font-semibold">
              ₹ 1200.00
            </p>
            <button className="lg:px-3 px-2 py-[10px] whitespace-nowrap text-white font-poppins lg:text-xl md:text-lg sm:text-base text-sm font-medium hover:text-[#BD7D41] shadow-[inset_0_18rem_0_0_#BD7D41] border-[2px] border-transparent hover:shadow-[inset_0_0_0_0] duration-500 hover:border-[#BD7D41]">
              ADD TO CART
            </button>
          </div>
        </div>
    ))
  return (
    <div className="lg:pt-[110px] md:pt-24 sm:pt-16 pt-10 lg:pb-32 md:pb-28 sm:pb-20 pb-10 overflow-x-clip ">
      <div className="container max-w-[1320px] mx-auto px-3 relative">
        <div className="flex items-center gap-[11px] lg:justify-start justify-center md:mb-[19px]">
          <div className="w-[6%] border border-solid border-black"></div>
          <h3 className=" font-poppins sm:text-xl text-lg text-nowrap leading-normal font-normal text-[#BD7D41]">
            Shopping Store
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h2 className="md:pt-5 pt-2 text-[#243040] font-poppins md:text-[35px] sm:text-3xl text-2xl font-bold ">
            Latest Deal
          </h2>  <div className="flex items-center gap-5 max-sm:pt-4">
             <button onClick={()=> arrow?.current?.slickPrev()} className="2xl:w-[99px] md:w-[80px] duration-500 group hover:border-[#BD7D41] border-[2px] border-transparent 2xl:h-[99px] md:h-[80px] w-[50px] h-[50px] 2xl:absolute left-[-7%] bottom-[36%] rounded-full flex justify-center items-center bg-white shadow-[2px_7px_16px_0px_#00000014]
            "><span><svg xmlns="http://www.w3.org/2000/svg" width="42" height="16" viewBox="0 0 42 16" fill="none">
              <path d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM42 9H1V7H42V9Z" fill="black" className="group-hover:fill-[#BD7D41]"/>
                      </svg></span></button>
                   <button onClick={()=> arrow?.current?.slickNext()} className="2xl:w-[99px] md:w-[80px] 2xl:h-[99px] md:h-[80px] w-[50px] h-[50px] duration-500 group hover:border-[#BD7D41] border-[2px] border-transparent 2xl:absolute right-[-7%] bottom-[36%]  rounded-full flex justify-center items-center bg-white shadow-[2px_7px_16px_0px_#00000014]
            "><span><svg xmlns="http://www.w3.org/2000/svg" width="42" height="16" viewBox="0 0 42 16" fill="none">
              <path d="M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z" fill="black" className="group-hover:fill-[#BD7D41]"/>
            </svg></span></button>
          </div>
        </div>
              <Slider ref={arrow} {...settings}>{data}</Slider>
            
      </div>
    </div>
  ); 
};

export default Latest;
