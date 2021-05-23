import React from "react";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const isBigScreen = useMediaQuery({
    query: "(min-width: 968px)",
  });
  return (
    <footer className="bg-amazon_blue">
      <div className="bg-amazon_blue-light p-2 text-center text-white cursor-pointer hover:bg-amazon_blue-thin">
        Back to top
      </div>
      {isBigScreen ? (
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
      ) : (
        <div className="text-white py-5 px-1 flex  space-x-10 xl:space-x-24 mx-auto justify-center">
          <div className="">
            <div className=" text-sm space-y-2">
              <p className="link">An's Amazon.in</p>
              <p className="link">Amazon Pay</p>
              <p className="link">Wish List</p>
              <p className="link">Your Account</p>
              <p className="link">Returns </p>
              <p className="link">Customer Service </p>
              <p className="link">Go to Desktop </p>
            </div>
          </div>
          <div className="">
            <div className=" text-xs space-y-2">
              <p className="link">Your Orders</p>
              <p className="link">Amazon App Download</p>
              <p className="link">Find a Wish List</p>
              <p className="link">
                Your Recently Viewed <br /> Itens
              </p>
              <p className="link">Sell</p>
              <p className="link">Help</p>
            </div>
          </div>
        </div>
      )}
      <hr className="border-gray-700 " />
      <div className="p-10 flex items-centre justify-center flex-col flex-grow">
        <div className="flex items-centre justify-center">
          <img src="/logo2.png" alt="logo" className="h-8" />
        </div>
        <div
          className="
          flex  space-x-5 text-white items-center justify-center text-xs my-5
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
      <div className="bg-[#131A22] flex items-center justify-center">
        <div className="text-gray-500 grid grid-cols-5 tex-ls gap-11 gap-y-6  p-3 ">
          <div className="mr-10">
            <h4 className="text-white font-bold">AbdBooks</h4>
            <p>
              Books ,art <br />
              &collectibles
            </p>
          </div>
          <div className="">
            <h4 className="text-white font-bold">Amazon Web Services</h4>
            <p>
              Scalable Cloud <br />
              Computing Services
            </p>
          </div>
          <div className="">
            <h4 className="text-white font-bold">Audible</h4>
            <p>
              Download <br /> Audio Books
            </p>
          </div>
          <div className="">
            <h4 className="text-white font-bold">DPReview</h4>
            <p>
              Digital <br /> Photography
            </p>
          </div>{" "}
          <div className="">
            <h4 className="text-white font-bold"> IMDb</h4>
            <p>
              Movies, TV <br /> & Celebrities
            </p>
          </div>{" "}
          <div className="">
            <h4 className="text-white font-bold">Shopbop</h4>
            <p>
              Designer <br /> Fashion Brands
            </p>
          </div>{" "}
          <div className="">
            <h4 className="text-white font-bold"> Amazon Business</h4>
            <p>
              Everything <br /> For Your Business
            </p>
          </div>{" "}
          <div className="">
            <h4 className="text-white font-bold">Prime Now</h4>
            <p>
              2-Hour Delivery <br /> on Everyday Items
            </p>
          </div>{" "}
          <div className="">
            <h4 className="text-white font-bold">Amazon Prime Music</h4>
            <p>
              70 million songs, ad-free <br /> Over 9 million podcast episodes
            </p>
          </div>{" "}
          <div className="">
            <h4 className="text-white font-bold">Amazon Web Services</h4>
            <p>
              Scalable Cloud <br /> Computing Services
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#131A22] flex items-center justify-center  p-3 tex-ls space-x-5">
        <p className="link text-white">Conditions of Use & Sale</p>
        <p className="link text-white">Privacy Nots</p>
        <p className="link text-white">Interest-Based Ads</p>
        <p className="link text-white">
          © 1996-2021, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
}

export default Footer;
