import React from "react";
import Image from "next/image";
import style from "./header.style";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
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
            height={40}
            objectFit="contain"
            className={style.logo}
            alt="amazon logo"
          />
        </div>

        {/* search bar component */}
        <div className={style.searchContainer}>
          <input type="text" className={style.searchInput} />
          <SearchIcon className={style.searchIcon} />
        </div>
        {/* Right section on nav */}
        <div className={style.rightSectionContainer}>
          <div className={style.rightLink}>
            <p className="">Hello Anin Arafath</p>
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
      <div className={style.bottomNavBAr}>
        <p className="link flex  fex-row items-center">
          <MenuIcon className="h-6 mr-1 flex" />
          All
        </p>
        <p className={style.link}>Prime video</p>
        <p className={style.link}>Amazon Business</p>
        <p className={style.link}>Today's Deals</p>
        <p className={style.lgLinks}>Electronics's Deals</p>
        <p className={style.lgLinks}>Food & Grocery</p>
        <p className={style.lgLinks}>Prime</p>
        <p className={style.lgLinks}>Buy Again</p>
        <p className={style.lgLinks}>Shopper Toolkit</p>
        <p className={style.lgLinks}>Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
