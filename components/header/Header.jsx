import React from "react";
import Image from "next/image";
import style from "./header.style";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  LocationMarkerIcon
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="select-none">
      {/* top nav */}
      <div className={style.header}>
        <div className={style.logoContainer}>
          <Image
            src="/logo2.png"
            width={150}
            z
            height={40}
            objectFit="contain"
            className={style.logo}
            alt="amazon logo"
          />
        </div>
        <div className={style.rightSectionContainer}>
          <div className={`${style.rightLink} flex items-center  space-x-1`}>
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
           <img src="/ind_flag.png" alt="" className='h-6' />
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
      <div className="">
        <div className={style.bottomNavBAr}>
          <p className="link flex  fex-row items-center">
            <MenuIcon className="h-6 mr-1 flex" />
            All
          </p>
          <p className={style.link}>Best Sellers</p>
          <p className={style.link}>Mobiles</p>
          <p className={style.link}>Prime</p>
          <p className={style.lgLinks}>Fashion</p>
          <p className={style.lgLinks}>New Releases</p>
          <p className={style.lgLinks}>Electronics</p>
          <p className={style.lgLinks}>Customer Service</p>
          <p className={style.lgLinks}>Today's Deals</p>
          <p className={style.lgLinks}>Amazon Pay</p>

          <img src="/nav_1.jpg" alt="" className="IMPmargin" />
        </div>
      </div>
    </header>
  );
}

export default Header;
