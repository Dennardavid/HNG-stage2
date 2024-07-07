import Image from "next/image";

function Hero() {
  const products = [
    { href: "/", text: "Perfume" },
    { href: "/", text: "Hair Care" },
    { href: "/", text: "Skin Care" },
    { href: "/", text: "Make Up" },
    { href: "/", text: "Health & Beauty" },
    { href: "/", text: "Baby’s  Fashion" },
    { href: "/", text: "Woman’s Fashion" },
    { href: "/", text: "Men’s Fashion" },
  ];

  const renderProductsItems = (products) =>
    products.map((product) => (
      <li key={crypto.randomUUID()} className="list-none">
        <a href={product.href}>{product.text}</a>
      </li>
    ));
  return (
    <section className="flex justify-between pb-16">
      <div className="flex items-center border-r-[0.5px] border-b-[#0000004d] pl-[100px] pr-32 ">
        <ul className="flex flex-col gap-[16px]">
          {renderProductsItems(products)}
        </ul>
      </div>

      <Image
        src="/heroperfume.svg"
        width={891}
        height={401}
        className="mt-10 mr-28"
      />
    </section>
  );
}

export default Hero;
