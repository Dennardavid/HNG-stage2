import Footer from "../../components/footer";
import CartNavbar from "./cartnav";
import YouMayLike from "./youmaylike";
import CartSummary from "./cartsummary";
import "../globals.css";

function Cart() {
  return (
    <>
      <CartNavbar />
      <main>
        <CartSummary />
        <YouMayLike />
      </main>
      <Footer />
    </>
  );
}

export default Cart;
