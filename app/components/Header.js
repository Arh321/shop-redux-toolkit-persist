"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

export const Header = () => {
  const { cart, amount } = useSelector((store) => store.cart);

  return (
    <div className="w-full px-[10%] py-4 bg-cyan-800 flex items-center justify-between fixed top-0 left-0">
      <Link className="text-2xl text-gray-200" href={"/"}>
        Mobile Shop
      </Link>
      <div className="text-xl text-gray-200">
        <Link
          className="bg-cyan-800 rounded px-6 py-1 text-gray-300"
          href={"/basket"}
        >
          shop basket: {amount}
        </Link>
      </div>
    </div>
  );
};
