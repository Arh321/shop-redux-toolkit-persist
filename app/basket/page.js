"use client";
import {
  addAmount,
  addItemCart,
  addAmountItem,
  minesAmount,
  calculateTotal,
  remove,
  cleare,
} from "@/redux/features/cart";
import { toglle } from "@/redux/features/modal/modal";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BasketCart } from "../components/BasketCart";
import { Cart } from "../components/Cart";
import Modal from "../components/Modal";
import "../globals.css";

export default function BuyBasket() {
  const cart = useSelector((state) => state.cart.cart);
  const { total } = useSelector((state) => state.cart);
  const amount = useSelector((state) => state.cart.amount);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [amount]);

  return (
    <div className="w-full min-h-screen pt-10 flex flex-wrap items-center gap-[10%] bg-teal-600 justify-center">
      {!cart.length && (
        <div className="w-2/3 flex flex-col gap-2">
          <p className="w-full flex items-center justify-center mb-12 text-3xl font-semibold">
            your bag is empty!
          </p>
          <hr className="mt-4" />
          <div className="w-full mt-4 flex items-center justify-between px-12 text-xl font-semibold">
            <span>back to shop and add items</span>
            <Link
              className="bg-cyan-800 rounded px-6 py-1 text-gray-300 shadow-md ]"
              href={"/"}
            >
              Shop
            </Link>
          </div>
        </div>
      )}
      {cart.length ? (
        <div className="w-2/3 min-h-screen flex flex-col items-center gap-[10%] bg-teal-600 justify-center">
          {cart.map((obj) => {
            return (
              <BasketCart
                key={obj.id}
                obj={obj}
                button="+"
                button2="-"
                addAmount={addAmount}
                addItemCart={addAmountItem}
                minesAmount={minesAmount}
                calculateTotal={calculateTotal}
                remove={remove}
              />
            );
          })}
          <hr className="w-full mt-8 border border-black bg-gray-600" />
          <div className="w-full mt-4 flex items-center justify-between px-12 text-xl font-semibold">
            <button
              onClick={() => dispatch(toglle())}
              className="bg-red-800 rounded px-6 py-1 text-gray-300 shadow-md"
            >
              cleare all
            </button>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      {isOpen && <Modal cleare={cleare} toglle={toglle} />}
    </div>
  );
}
