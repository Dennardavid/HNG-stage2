import products from "./data.json";
import Image from "next/image";

function Collection() {
  const renderProductsItems = (products) => {
    return products.map((product) => (
      <article key={crypto.randomUUID()} className="cursor-pointer">
        <Image src={product.src} width={175} height={165} />
        <p className="text-[#00140D] font-normal w-[100px] text-base pt-2">
          {product.details}
        </p>
        <p className="font-medium text-[#FF7E08] leading-7 text-base pt-1">
          {product.prize}
        </p>
      </article>
    ));
  };

  return (
    <section className="grid grid-cols-6 justify-items-center items-center px-[85px] pb-[60px] pt-5 space-y-5">
      {renderProductsItems(products)}
    </section>
  );
}

export default Collection;
