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
    "https://res.cloudinary.com/dsngkhlct/image/upload/v1720540378/heroperfume1_vq5uiq.svg",
    "https://res.cloudinary.com/dsngkhlct/image/upload/v1720540378/heroperfume2_zmgwlr.svg",
    "https://res.cloudinary.com/dsngkhlct/image/upload/v1720540374/heroperfume5_z235kk.svg",
    "https://res.cloudinary.com/dsngkhlct/image/upload/v1720540370/heroperfume3_d1e2nq.svg",
    "https://res.cloudinary.com/dsngkhlct/image/upload/v1720540368/heroperfume4_syin5k.svg",
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
    <section className="flex justify-between pb-16 background z-10">
      <div className="flex items-center pl-[100px] pr-32 ">
        <ul className="flex flex-col gap-[16px]">
          {renderProductsItems(products)}
        </ul>
      </div>
      <div className="hidden lg:w-[891px] lg:mt-8 lg:mr-[100px] lg:z-0">
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
