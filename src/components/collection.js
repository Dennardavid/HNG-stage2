import products from "./data.json";
import Image from "next/image";
import React from "react";

function Collection() {
  const collection = [
    {
      img: "https://res.cloudinary.com/dsngkhlct/image/upload/v1720540361/7_hn5nlj.svg",
      text: "perfume",
    },
    {
      img: "https://res.cloudinary.com/dsngkhlct/image/upload/v1720540353/2_mbvkow.svg",
      text: "Hair Care",
    },
    {
      img: "https://res.cloudinary.com/dsngkhlct/image/upload/v1720540357/16_yrjvdo.svg",
      text: "Skin Care",
    },
    {
      img: "https://res.cloudinary.com/dsngkhlct/image/upload/v1720540358/15_axwcyk.svg",
      text: "Make Up",
    },
    {
      img: "https://res.cloudinary.com/dsngkhlct/image/upload/v1720540358/18_w1gls0.svg",
      text: "Health & Beauty",
    },
    {
      img: "https://res.cloudinary.com/dsngkhlct/image/upload/v1720540352/10_cjdsbw.svg",
      text: "Baby’s  Fashion",
    },
    {
      img: "https://res.cloudinary.com/dsngkhlct/image/upload/v1720540352/11_u6cbiy.svg",
      text: "Woman’s Fashion",
    },
    {
      img: "https://res.cloudinary.com/dsngkhlct/image/upload/v1720540347/3_bj5tvb.svg",
      text: "perfume",
    },
    {
      img: "https://res.cloudinary.com/dsngkhlct/image/upload/v1720540352/9_nj6lv0.svg",
      text: "Men’s Fashion",
    },
  ];

  const renderProductsItems = (products) => {
    return products.map((product) => (
      <article
        key={crypto.randomUUID()}
        className="cursor-pointer flex flex-col items-center justify-between py-2 rounded-[13px] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:shadow-lg"
      >
        <div className="relative">
          <div className="hover-heart absolute top-2 right-5"></div>
          <Image
            src={product.src}
            width={175}
            height={165}
            className="rounded-[13px]"
            alt={product.details}
          />
        </div>
        <div className="w-[90%] text-center">
          <p className="text-[#00140D] font-normal text-sm pt-2">
            {product.details}
          </p>
          <p className="font-medium text-[#FF7E08] leading-7 text-base pt-1">
            {product.prize}
          </p>
          <button className="bg-[#FF7E08] rounded-full px-[20px] py-[7px] text-[#f6f2f4] border-[0.5px] border-[#ff7e08] hover:text-[#00140d] hover:border-[0.5px] hover:border-[#ff7e08] font-medium mt-[7px] hover:bg-[#f8f8f8]">
            Add to cart
          </button>
        </div>
      </article>
    ));
  };

  return (
    <section className="px-3 pb-[100px] lg:px-[80px] lg:pb-[60px] lg:pt-5">
      <div className="lg:hidden">
        <h2 className="text-base font-medium">Categories</h2>
        <div className="flex space-x-1 overflow-x-auto py-4">
          {collection.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[90px] flex flex-col items-center">
              <Image
                src={item.img}
                width={60}
                height={60}
                alt={item.text}
                className="rounded-full"
              />
              <p className="text-center text-[11px] font-normal mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between pb-2 lg:hidden">
        <p className="text-base font-medium">Recommended For You</p>
        <p className="text-sm font-medium text-[#FF7E08]">View all</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-4 gap-x-4">
        {products.map((product, index) => (
          <React.Fragment key={crypto.randomUUID()}>
            {renderProductsItems([product])}
            {index % 3 === 2 && index < products.length - 1 && (
              <div className="hidden md:col-span-3 lg:col-span-6 h-[0.5px] bg-[#f2f1f0]"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Collection;
