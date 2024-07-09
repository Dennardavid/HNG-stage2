import Footer from "../../components/footer";
import CartNavbar from "./cartnav";
import YouMayLike from "./youmaylike";
import CartSummary from "./cartsummary";
import "../globals.css";

function Cart() {
  return (
    <>
      <CartNavbar heading="Cart" />
      <CartSummary />
      <YouMayLike />
      <Footer />
    </>
  );
}

export default Cart;
