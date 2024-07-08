import Image from "next/image";

function CartSummary() {
  return (
    <section className="flex">
      <div>
        <div>
          <p>Cart (2)</p>
        </div>
        <div>
          <div>
            <Image src="/3.svg" width={121} height={114} />
            <div>
              <p>N°5 Eau de Parfum Spray</p>
              <p>In stock</p>
              <Image src="/remove.svg" width={10.5} height={13.5} />
              <p>Remove</p>
            </div>
          </div>
          <div>
            <p>$121.52</p>
            <div>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p>Cart Summary</p>
        </div>

        <div>
          <div>
            <p>subtotal</p>
            <p>$121.52</p>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </section>
  );
}

export default CartSummary;
