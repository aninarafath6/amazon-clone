import React from "react";

function Footer() {
  return (
    <footer className="bg-amazon_blue">
      <div className="bg-amazon_blue-light p-2 text-center text-white cursor-pointer hover:bg-amazon_blue-thin">
        Back to top
      </div>
      <div className="text-white py-5 px-3 flex  space-x-10 xl:space-x-24 mx-auto justify-center">
        <div className="">
          <h3 className="text-lg font-bold mb-3">Get to Know Us</h3>
          <div className=" text-xs space-y-2">
            <p className="link">Careers</p>
            <p className="link">About us</p>
            <p className="link">Press Releases</p>
            <p className="link">Amazon Cares</p>
            <p className="link">Gift a Smile </p>
          </div>
        </div>
        <div className="">
          <h3 className="text-lg font-bold mb-3">Contact us</h3>
          <div className=" text-xs space-y-2">
            <p className="link">Facebook</p>
            <p className="link">Twitter</p>
            <p className="link">Instagram</p>
          </div>
        </div>
        <div className="">
          <h3 className="text-lg font-bold mb-3">Make Money with Us</h3>
          <div className=" text-xs space-y-2">
            <p className="link"> sell on Amazon</p>
            <p className="link"> Sell under Amazon Accelerator</p>
            <p className="link"> Amazon Global Selling</p>
            <p className="link"> Become an Affiliate</p>
            <p className="link"> Fulfilment by Amazon</p>
            <p className="link"> Advertise Your Products</p>
            <p className="link"> Amazon Pay on Merchants</p>
          </div>
        </div>
        <div className="hidden md:flex flex-col">
          <h3 className="text-lg font-bold mb-3 ">Let us Help You</h3>
          <div className=" text-xs space-y-2">
            <p className="link">COVID-19 and Amazon</p>
            <p className="link"> Your Account</p>
            <p className="link"> Returns Centre</p>
            <p className="link"> 100% Purchase Protection</p>
            <p className="link"> Amazon App Download</p>
            <p className="link"> Amazon Assistant Download</p>
            <p className="link"> Help</p>
          </div>
        </div>
      </div>
      <hr className="border-gray-500 " />
      <div className="p-10 flex items-centre justify-center flex-col flex-grow">
        <div className="flex items-centre justify-center">
          <img src="/logo2.png" alt="logo" className="h-8" />
        </div>
        <div
                  className="
          flex  space-x-5 text-white items-center justify-center
       "
        >
          <p className="">Australia</p>
          <p className="">Brazil</p>
          <p> Canada</p>
          <p> China </p>
          <p>France </p>
          <p>Germany</p>
          <p> Italy </p>
          <p>Japan</p>
          <p> Mexico</p>
          <p> Netherlands </p>
          <p>Poland </p>
          <p>Singapore</p>
          <p>Spain</p>
          <p>Turkey</p>
          <p>United</p>
          
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
