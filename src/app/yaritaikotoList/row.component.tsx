"use client";

import { useState } from "react";
import { Item } from "./models";

export default function RowComponent({
  item,
  onChangeName,
}: {
  item: Item;
  onChangeName?: (e: any, number: number) => void;
}) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div key={item.number} className="flex w-full items-center justify-center mt-2">
      <div className="relative text-2xl font-bold text-white font-mono">
        {item.number.toString().padStart(3, "0")}
        {item.doneAt && (
          <div className="absolute -top-2 -left-2">
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
      <div className="grow ml-4 text-l">
        <input
          type="text"
          className="w-full p-2 text-gray-700 rounded-md focus:outline-none"
          onChange={(e) => onChangeName && onChangeName(e, item.number)}
          maxLength={22}
          defaultValue={item.name}
        />
      </div>
      <div className="ml-4 relative">
        {item.name ? (
          <>
            <svg
              className="w-8 h-8 text-white cursor-pointer"
              onClick={() => setOpenModal(!openModal)}
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
            {openModal && (
              <div className="absolute -right-16 top-0 z-10 w-16 bg-white shadow rounded border overflow-hidden">
                <ul className="list-reset text-gray-900">
                  <li className="px-2 py-1 block no-underline hover:no-underline">完了</li>
                  <li className="px-2 py-1 block no-underline hover:no-underline">削除</li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <div className="w-8 h-8" />
        )}
      </div>
    </div>
  );
}
