"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@/redux/features/products";
import { Cart } from "./components/Cart";
import { addItemCart, addAmount, cleare } from "@/redux/features/cart";

import "./globals.css";

const url = "https://course-api.com/react-useReducer-cart-project";
export default function Home() {
  const products = useSelector((state) => state.products.products);

  console.log(products);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const setProducts = (p) => dispatch(add(p));
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setProducts([]);
        const d = await fetch(url);
        const data = await d.json();
        setProducts(data);
        setLoading(false);
      } catch (e) {
        console.warn(e);
      }
    };
    getData();
    dispatch(cleare());
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-3xl">
        loading...
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex items-center px-[10%] bg-teal-600 gap-10 flex-wrap">
      {products.length &&
        products.map((obj) => {
          return (
            <Cart
              key={obj.id}
              obj={obj}
              button="buy"
              addAmount={addAmount}
              addItemCart={addItemCart}
            />
          );
        })}
    </div>
  );
}
