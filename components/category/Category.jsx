import React from "react";

function Category() {
  const category = [
    {
      name: "Essentials",
      url: "https://m.media-amazon.com/images/I/11M0jYc-tRL._SS70_.png",
    },
    {
      name: "Fresh",
      url: "https://m.media-amazon.com/images/I/11CR97WoieL._SS70_.png",
    },
    {
      name: "Pantry",
      url: "https://m.media-amazon.com/images/I/11JfFA3oWaL._SS70_.png",
    },
    {
      name: "Mobiles",
      url: "https://m.media-amazon.com/images/I/116KbsvwCRL._SS70_.png",
    },
    {
      name: "Fashion",
      url: "https://m.media-amazon.com/images/I/11eJNQucpGL._SS70_.png",
    },
    {
      name: "Electronics",
      url: "https://m.media-amazon.com/images/I/11qyfRJvEbL._SS70_.png",
    },
    {
      name: "Home",
      url: "https://m.media-amazon.com/images/I/11BIyKooluL._SS70_.png",
    },
    {
      name: "Appliance",
      url: "https://m.media-amazon.com/images/I/01cPTp7SLWL._SS70_.png",
    },
    {
      name: "Pantry",
      url: "https://m.media-amazon.com/images/I/11JfFA3oWaL._SS70_.png",
    },
    {
      name: "Mobiles",
      url: "https://m.media-amazon.com/images/I/116KbsvwCRL._SS70_.png",
    },
    {
      name: "Fashion",
      url: "https://m.media-amazon.com/images/I/11eJNQucpGL._SS70_.png",
    },
  ];
  return (
    <section className="bg-white flex space-x-11 mb-3 pl-2 p-2 overflow-hidden overflow-x-scroll scrollbar-hide">
      {category.map((cate) => (
        <div className="flex flex-col  items-center space-y-1 text-gray-700">
          <img src={cate.url} alt="" className="h-16 w-16 " />
          <p>{cate.name}</p>
        </div>
      ))}
    </section>
  );
}

export default Category;
