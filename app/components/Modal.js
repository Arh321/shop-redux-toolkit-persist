"use client";

import { useDispatch } from "react-redux";

export default function Modal({ cleare, toglle }) {
  const dispatch = useDispatch();
  const confirm = () => {
    dispatch(toglle());
    dispatch(cleare());
  };
  const cancel = () => {
    dispatch(toglle());
  };
  return (
    <div className="w-full h-screen flex items-center justify-center absolute top-0 left-0 z-10 bg-[rgb(0,0,0,0.5)]">
      <div className="w-[20%] p-11 flex flex-col items-center justify-center gap-4 px-6 bg-white rounded">
        <p>are you sure to remove all items?</p>
        <div className="flex items-center justify-center gap-12">
          <button
            onClick={confirm}
            className="px-2 border-2 rounded border-blue-400 hover:scale-105 active:bg-gray-600"
          >
            confirm
          </button>
          <button
            onClick={cancel}
            className="px-2 border-2 rounded border-red-400 hover:scale-105 active:bg-gray-600"
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}
