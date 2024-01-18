import React from "react";
import sofa1 from "../assets/images/sofa1.webp";
import sofa2 from "../assets/images/sofa2.webp";
import sofa3 from "../assets/images/sofa3.webp";
import sofa4 from "../assets/images/sofa4.webp";
import sofa5 from "../assets/images/sofa5.webp";
import sofa6 from "../assets/images/sofa6.webp";

const data = [
  {
    img: sofa1,
  },
  {
    img: sofa2,
  },
  {
    img: sofa3,
  },
  {
    img: sofa4,
  },
  {
    img: sofa5,
  },
  {
    img: sofa6,
  },
];

const Product = () => {
  const carddata = data.map((data, s) => (
    <div
      key={s}
      className="lg:w-1/3 sm:w-1/2 w-full flex justify-center items-center  px-3 md:mt-10 mt-4"
    >
      <div
        className="card md:px-6 px-4 transition-all duration-700 py-4 hover:shadow-[6px_13px_38px_0px_#0000001F]
 bg-white shadow-[0px_0px_0px_0px_#0000001F]"
      >
        <img src={data.img} alt="1" className="w-full" />
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
    </div>
  ));
  return (
    <div className="md:pt-20 sm:py-14 py-10 xl:pb-[169px] lg:pb-32 md:pb-20 overflow-x-clip">
      <div className="container max-w-[1320px] mx-auto px-3">
        <div className="sm:flex sm:justify-between justify-center flex-wrap items-center">
          <div className="" data-aos="fade-down-right">
            <div className="flex items-center gap-[11px] md:justify-start justify-center md:mb-[19px]">
              <div className="w-[27%] border border-solid border-black"></div>
              <h3 className=" font-poppins md:text-xl text-lg  text-center leading-normal font-normal text-[#BD7D41]">
                Shopping Store
              </h3>
            </div>
            <h2 className="text-[#243040] max-sm:text-center font-poppins md:text-[35px] sm:text-3xl text-2xl font-bold md:pt-4 pt-1">
              Our Products
            </h2>
          </div>
          <div
            className="max-sm:flex max-sm:justify-center sm:items-center"
            data-aos="fade-down-left"
          >
            <button className="md:px-12 sm:px-10 px-6 sm:py-5 py-3 md:mt-9 sm:mt-4 mt-3 hover:text-[#BD7D41] shadow-[inset_0_18rem_0_0_#BD7D41] border-[2px] border-transparent hover:shadow-[inset_0_0_0_0] duration-500 hover:border-[#BD7D41] text-white font-poppins md:text-xl text-lg font-semibold leading-normal">
              VIEW ALL PRODUCT
            </button>
          </div>
        </div>
        <div className="flex xl:mt-28 lg:mt-20 md:mt-16 sm:mt-10 mt-5 justify-center items-center flex-row flex-wrap -mx-3">
          {carddata}
        </div>
      </div>
    </div>
  );
};

export default Product;
