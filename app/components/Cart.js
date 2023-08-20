"use client";

import { useDispatch, useSelector } from "react-redux";

export const Cart = ({
  obj,
  button,
  addItemCart,
  addAmount,
  minesAmount,
  button2,
}) => {
  const dispatch = useDispatch();
  const cartFunction = (obj) => {
    dispatch(addItemCart(obj));
    dispatch(addAmount(obj));
  };

  return (
    <div className="w-[25%] h-[200px] flex mt-10">
      <div className="w-1/2">
        <img className="w-full h-full" src={obj.img} alt={obj.title}></img>
      </div>
      <div className="w-1/2 flex flex-col gap-4 justify-end">
        <p className="text-2xl">{obj.title}</p>
        <p className="text-2xl">{obj.price}</p>
        <button
          onClick={() => cartFunction(obj)}
          className="bg-blue-700 rounded border-none py-2 w-1/2 text-white text-2xl active:bg-blue-950 active:scale-95"
        >
          {button}
        </button>
      </div>
    </div>
  );
};
