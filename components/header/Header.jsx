import React from "react";
import Image from "next/image";
import style from './header.style'
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header>
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
            <span className={style.basketCount}>
              0
            </span>
            <p className={style.basketText}>
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div></div>
    </header>
  );
}

export default Header;
