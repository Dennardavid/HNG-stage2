import Footer from "../../components/footer";
import CartNavbar from "./cartnav";
import YouMayLike from "./youmaylike";
import CartSummary from "./cartsummary";
import "../globals.css";

function Cart() {
  return (
    <>
      <CartNavbar />
      <main className="pb-[100px]">
        <CartSummary />
        <YouMayLike />
      </main>
      <Footer />
    </>
  );
}

export default Cart;
