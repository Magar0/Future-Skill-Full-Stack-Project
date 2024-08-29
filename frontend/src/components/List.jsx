import React from "react";

const List = ({ data }) => {
  return (
    <>
      <div className="flex flex-col">
        <p className="text-base font-bold mb-2">{data?.title}</p>
        <ul>
          {data?.list.map((ele, ind) => (
            <li key={ind} className="text-sm ">
              {ele}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
