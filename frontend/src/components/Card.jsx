import React from "react";

const Card = ({ data }) => {
  return (
    <div className="bg-blue-50 w-[500px] border border-slate-300 rounded-lg h-40">
      <div className="font-semibold mt-3 mb-1 px-3 text-lg">{data?.title}</div>
      <div className="bg-slate-300 w-full h-[1px]"></div>
      <div className="px-3 py-2 text-base text-slate-600  ">
        {data?.description.length > 250 ? (
          <p>{data?.description.slice(0, 250)}...</p>
        ) : (
          data?.description
        )}
      </div>
    </div>
  );
};

export default Card;
