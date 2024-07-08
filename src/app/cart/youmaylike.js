import Image from "next/image";
import products from "./data.json";

function YouMayLike() {
  const renderProductsItems = (products) => {
    return products.map((product) => (
      <article key={crypto.randomUUID()} className="cursor-pointer">
        <Image
          src={product.src}
          width={175}
          height={165}
          className="rounded-[13px]"
        />
        <p className="text-[#00140D] font-normal w-[100px] text-base pt-2">
          {product.details}
        </p>
        <p className="font-medium text-[#FF7E08] leading-7 text-base pt-1">
          {product.prize}
        </p>
        <button className="bg-[#FF7E08] rounded-full px-[20px] py-[7px] text-[#f6f2f4] font-medium mt-[7px]">
          Add to cart
        </button>
      </article>
    ));
  };

  return (
    <section>
      <h3 className="font-semibold text-[#00140D] ml-24 text-base">
        You may also like
      </h3>
      <section className="grid grid-cols-6 justify-items-center items-center px-[85px] pb-[60px] pt-5 space-y-5">
        {renderProductsItems(products)}
      </section>
    </section>
  );
}

export default YouMayLike;
