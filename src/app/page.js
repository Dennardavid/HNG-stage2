import Navbar from "../components/nav";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Collection from "../components/collection";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collection />
      </main>
      <Footer />
    </>
  );
}
export default Home;
