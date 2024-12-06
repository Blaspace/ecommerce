import React from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import SecondSection from "../component/SecondSection";
import FeaturedProducts from "../component/FeaturedProducts";
import Footer from "../component/Footer";

function Home() {
  return (
    <div>
      <Nav />
      <Header text={"Products"} />
      <SecondSection />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default Home;
