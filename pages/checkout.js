import React from "react";
import Image from "next/image";
import Head from "next/head";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/checkout product/CheckoutProduct";

function Checkout() {
  const items = useSelector(selectItems)
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Cart</title>
        <meta
          name="description"
          content="amazon cloned using next js and tailwind css "
        />
        <link rel="icon" href="/logo.png" />
  *
      </Head>

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left section  */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="/images/Prime-day-banner.png"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col space-y-10 p-5 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {
                items.length === 0?'Your Cart Is Empty' :'Shopping Cart'
              }
            </h1>

            {
              items.map((item, i) => (
                <CheckoutProduct {...item}  key={i}/>
              ))
            }
          </div>
        </div>
        {/* right section  */}
        <div className=""></div>
      </main>
    </div>
  );
}

export default Checkout;
