import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/checkout product/CheckoutProduct";
import Currency from "react-currency-formatter";
import { signIn, signOut, useSession } from "next-auth/client";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const [session] = useSession();

  return (
    <div className="bg-gray-100 p-0 m-0">
      <Head>
        <title>Amazon Cart</title>
        <meta
          name="description"
          content="amazon cloned using next js and tailwind css "
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="lg:flex flex-row-reverse max-w-screen-xl mx-auto bg-white sm:bg-[#f3f4f6] rounded">
        {/* top */}

        <div className=" m-5 space-y-2 ">
          <div className="bg-white p-1 flex items-center justify-center">
            <img src="/ad.png" />
          </div>

          <div className="bg-white lg:text-center p-5 lg:h-52 rounded md:space-y-2">
            <h4 className="text-xl ">
              {" "}
              Subtotal{" "}
              <span className="font-bold">
                {<Currency quantity={total} currency="INR" />}
              </span>
            </h4>
            <p className="text-gray-600 text-sm">
              EMI Available <span className="text-blue-400">Details</span>
            </p>
            <p className="text-sm">
              <span className="text-green-600">
                Your order is eligible for FREE Delivery
              </span>
              . Select this option at checkout.{" "}
              <span className="text-blue-400">Details</span>
            </p>
            <button className="bg-[#ffd814] w-full p-2 rounded-md  my-2 shadow-md active:shadow-none active:bg-white active:border border-1 active:border-[#ffd814]  focus:outline-none focus:ring-yellow-200">
              {session
                ? `Proceed to buy (${items.length} item)`
                : `Sign In to buy (${items.length} item)`}
            </button>
          </div>
        </div>
        {/* left section  */}
        <div className="flex-grow m-5 shadow-sm ">
          <div className="hidden lg:flex bg-white py-3">
            <Image
              src="/images/Prime-day-banner.png"
              width={1020}
              height={250}
              objectFit="contain"
              className=" "
            />
          </div>

          <div className="flex flex-col space-y-10 p-5 bg-white">
            {items.map((item, i) => (
              <CheckoutProduct {...item} key={i} />
            ))}
          </div>
        </div>

        {/* right section  */}
        <div className=""></div>
      </main>
    </div>
  );
}

export default Checkout;
