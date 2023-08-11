"use client";

import { useState } from "react";

type Item = {
  value: string;
  isDone: boolean;
};

export default function Row({ number, item }: { number: number; item: Item }) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div key={number} className="flex items-center justify-center mt-2">
      <div className="relative w-12 text-2xl font-bold text-white">
        {number.toString().padStart(3, "0")}
        {item.isDone && (
          <div className="absolute bottom-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-red-500"
              fill="none"
              viewBox="5 2 15 18"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="ml-4 text-l">
        <input
          type="text"
          className="w-96 p-2 text-gray-700 rounded-md focus:outline-none"
          maxLength={22}
          defaultValue={item.value}
        />
      </div>
      <div className="ml-4 cursor-pointer" onClick={() => setOpenModal(!openModal)}>
        {/* ハンバーガーSVG */}
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
      {openModal && <>✗</>}
    </div>
  );
}
