"use client";

import { useDispatch, useSelector } from "react-redux";

export const BasketCart = ({
  obj,
  button,
  addItemCart,
  addAmount,
  minesAmount,
  button2,
  calculateTotal,
  remove,
}) => {
  const dispatch = useDispatch();
  const cartFunction = (obj) => {
    dispatch(addItemCart(obj));
    dispatch(addAmount(obj));
    dispatch(calculateTotal());
  };
  const cartMinesFunction = (obj) => {
    if (obj.amount == 1) {
      dispatch(remove(obj));
      dispatch(addAmount(obj));
    }
    dispatch(minesAmount(obj));
    dispatch(calculateTotal());
  };

  const removeFunction = (obj) => {
    dispatch(remove(obj));
    dispatch(addAmount(obj));
  };

  return (
    <div className="w-full h-[120px] flex mt-10">
      <div className="w-1/5">
        <img className="w-full h-full" src={obj.img} alt={obj.title}></img>
      </div>
      <div className="w-1/2 flex flex-col gap-4 justify-end">
        <p className="text-2xl">{obj.title}</p>
        <p className="text-2xl">{obj.price}</p>
        <button onClick={() => removeFunction(obj)}>remove</button>
      </div>
      <div className="w-1/3 flex flex-col items-center gap-2 justify-end">
        <button
          onClick={() => cartFunction(obj)}
          className="bg-blue-700 rounded border-none  w-1/5 text-white text-2xl active:bg-blue-950 active:scale-95"
        >
          {button}
        </button>
        {obj.amount}
        <button
          onClick={() => cartMinesFunction(obj)}
          className="bg-blue-700 rounded border-none  w-1/5 text-white text-2xl active:bg-blue-950 active:scale-95"
        >
          {button2}
        </button>
      </div>
    </div>
  );
};
