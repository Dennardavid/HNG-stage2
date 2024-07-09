"use client";
import { useState } from "react";
import Image from "next/image";
import Carousel from "./carousel";

function Hero() {
  const [activeLink, setActiveLink] = useState(0);

  const products = [
    { href: "#", text: "Perfume" },
    { href: "#", text: "Hair Care" },
    { href: "#", text: "Skin Care" },
    { href: "#", text: "Make Up" },
    { href: "#", text: "Health & Beauty" },
    { href: "#", text: "Baby’s Fashion" },
    { href: "#", text: "Woman’s Fashion" },
    { href: "#", text: "Men’s Fashion" },
  ];

  const images = [
    "/heroperfume1.svg",
    "/heroperfume2.svg",
    "/heroperfume3.svg",
    "/heroperfume4.svg",
    "/heroperfume5.svg",
  ];

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const renderProductsItems = (products) =>
    products.map((product, index) => (
      <li
        key={crypto.randomUUID()}
        className={`list-none flex items-center ${
          activeLink === index ? "text-[#FF7E08] font-bold" : "text-gray-700"
        }`}
      >
        <a
          href={product.href}
          onClick={() => handleLinkClick(index)}
          className="flex items-center"
        >
          {product.text}
          {activeLink === index && (
            <span className="ml-16 ">
              <Image
                src="/DropDown.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />
            </span>
          )}
        </a>
      </li>
    ));

  return (
    <section className="flex justify-between pb-16">
      <div className="flex items-center border-r-[0.5px] border-b-[#0000004d] pl-[100px] pr-32 ">
        <ul className="flex flex-col gap-[16px]">
          {renderProductsItems(products)}
        </ul>
      </div>
      <div className="w-3/5 mt-8 mr-[100px]">
        <Carousel autoSlide={true}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={891}
              height={401}
              alt="Carousel Image"
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Hero;
