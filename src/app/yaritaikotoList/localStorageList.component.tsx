"use client";

import { Item } from "./models";
import Row from "./row.component";

export default function LocalStorageListComponent({
  items,
  onChangeItemName,
}: {
  items: Item[];
  onChangeItemName?: (e: any, number: number) => void;
}) {
  return (
    <>
      <div className="flex items-center my-4">
        <div className="grow items-center">
          <h1 className="text-3xl font-bold text-white content-center">やりたいことリスト</h1>
        </div>
        <div className="grow-0 items-center">
          <svg
            className="h-7 w-7 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <g>
              <path d="M243.591,309.362c3.272,4.317,7.678,6.692,12.409,6.692c4.73,0,9.136-2.376,12.409-6.689l89.594-118.094   c3.348-4.414,4.274-8.692,2.611-12.042c-1.666-3.35-5.631-5.198-11.168-5.198H315.14c-9.288,0-16.844-7.554-16.844-16.84V59.777   c0-11.04-8.983-20.027-20.024-20.027h-44.546c-11.04,0-20.022,8.987-20.022,20.027v97.415c0,9.286-7.556,16.84-16.844,16.84   h-34.305c-5.538,0-9.503,1.848-11.168,5.198c-1.665,3.35-0.738,7.628,2.609,12.046L243.591,309.362z" />
              <path d="M445.218,294.16v111.304H66.782V294.16H0v152.648c0,14.03,11.413,25.443,25.441,25.443h461.118   c14.028,0,25.441-11.413,25.441-25.443V294.16H445.218z" />
            </g>
          </svg>
        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-center">
        {items.map((item) => (
          <Row
            key={item.number}
            item={item}
            onChangeName={(e) => onChangeItemName && onChangeItemName(e, item.number)}
          />
        ))}
      </div>
    </>
  );
}
