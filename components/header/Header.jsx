import React from "react";
import Image from "next/image";
import style from "./header.style";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  LocationMarkerIcon
} from "@heroicons/react/outline";
import { useMediaQuery } from "react-responsive";

function Header() {
  const isBigScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <header className="select-none">
      {isBigScreen ? (
        <>
          {/* top nav */}
          <div className={style.header}>
            <div className={style.logoContainer}>
              <Image
                src="/logo2.png"
                width={150}
                height={40}
                objectFit="contain"
                className={style.logo}
                alt="amazon logo"
              />
            </div>
            <div className={style.rightSectionContainer}>
              <div
                className={`${style.rightLink} flex items-center  space-x-1`}
              >
                <LocationMarkerIcon className="h-6" />
                <div>
                  <p className="">Hello</p>
                  <p className={style.rightContent}>Select your address</p>
                </div>
              </div>
            </div>
            {/* search bar component */}
            <div className={style.searchContainer}>
              <select
                name=""
                id=""
                className="outline-none text-gray-700 h-full rounded-l-md text-sm p-2"
              >
                <option value="">All</option>
              </select>
              <input type="text" className={style.searchInput} />
              <SearchIcon className={style.searchIcon} />
            </div>
            {/* Right section on nav */}
            <div className={style.rightSectionContainer}>
              <div className={style.rightLink}>
                <img src="/ind_flag.png" alt="" className="h-6" />
              </div>
              <div className={style.rightLink}>
                <p className="">Hello, Anin Arafath</p>
                <p className={style.rightContent}>Account & List</p>
              </div>
              <div className={style.rightLink}>
                <p className="">Returns</p>
                <p className={style.rightContent}>& Orders</p>
              </div>
              <div className={style.basketContainer}>
                <ShoppingCartIcon className={style.basketIcon} />
                <span className={style.basketCount}>0</span>
                <p className={style.basketText}>Basket</p>
              </div>
            </div>
          </div>

          {/* bottom nav */}
          <div className="overflow-hidden">
            <div className={style.bottomNavBAr}>
              <p className="link flex  fex-row items-center">
                <MenuIcon className="h-6 mr-1 flex" />
                All
              </p>
              <p className={style.link}>Best Sellers</p>
              <p className={style.link}>Mobiles</p>
              <p className={style.link}>Prime</p>
              <p className={style.link}>Fashion</p>
              <p className={style.link}>New Releases</p>
              <p className={style.link}>Electronics</p>
              <p className={style.lgLinks}>Customer Service</p>
              <p className={style.lgLinks}>Today's Deals</p>
              <p className={style.lgLinks}>Amazon Pay</p>

              <img src="/nav_1.jpg" alt="" className="IMPmargin" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex bg-amazon_blue p-2 flex-grow py-2 flex-col">
            {/* left section  */}
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 h-full justify-between w-full py-1 ">
              <div className="flex items-center justify-center ">
                <div className="flex items-center h-ful mx-1 ">
                  <MenuIcon className=" mb-2 h-6  flex text-white my-auto" />
                </div>
                <Image
                  src="/logo2.png"
                  width={110}
                  z
                  height={25}
                  objectFit="contain"
                  className={style.logo}
                  alt="amazon logo"
                />
              </div>

              {/* right section  */}
              <div>
                <div className="text-white flex items-center text-xs space-x-6 mx-6  mb-2">
                  <div className="link flex items-center relative">
                    <div className="link">
                      <p className="mr-2">Hello, Anin</p>
                    </div>
                    <ShoppingCartIcon className="h-8" />
                    <span className={style.basketCount}>0</span>
                    <p className={style.basketText}>Basket</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="w-12/12 flex focus:ring-2 focus:ring-yellow-500 active:from-yellow-500 bg-yellow-400 hover:bg-yellow-500 items-center h-10 rounded-md flex-grow cursor-pointer">
                <input
                  type="text"
                  className="p-2 h-full w flex-shrink flex-grow   focus:outline-none rounded-l-md"
                />
                <SearchIcon className={style.searchIcon} />
              </div>
            </div>

            <div className="text-white flex space-x-3 my-2 p-1 font-bold">
              <p className="">Category</p>
              <p className="">Wish List</p>
              <p className="">Deals</p>
              <p className="">Sell</p>
            </div>
          </div>
          {/* bottom nav */}
          <div className="overflow-hidden">
            <div className={style.bottomNavBAr}>
              <LocationMarkerIcon className="h-6" />
              <div className="py-3">
                <p className={style.rightContent}>Select your address</p>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </header>
  );
}

export default Header;
