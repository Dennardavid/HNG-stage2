import Footer from "../../components/footer";
import CartNavbar from "./cartnav";
import YouMayLike from "./youmaylike";
import CartSummary from "./cartsummary";
import "../globals.css";

function Cart() {
  return (
    <section className="h-dvh">
      <CartNavbar />
      <CartSummary />
      <YouMayLike />
      <Footer />
    </section>
  );
}

export default Cart;
