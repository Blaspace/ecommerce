import React, { useEffect, useState } from "react";
import Nav from "../component/Nav";
import AllProduct from "../component/AllProduct";
import { products } from "../data/Item";
import Tittle from "../component/Tittle";
import Footer from "../component/Footer";

function Watch() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const i = products.sort((x, y) => {
      return 0.5 - Math.random();
    });
    const x = i.filter((v) => v.cat === "Watch");
    setItems(x);
  }, []);
  return (
    <div>
      <Nav />
      <Tittle text={"All Watches"} />
      <div className="third">
        <div className="third-con">
          <AllProduct items={items} />
          <br />
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Watch;
