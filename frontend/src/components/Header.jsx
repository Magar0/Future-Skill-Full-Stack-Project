import React from "react";
import { CgAbstract } from "react-icons/cg";

const Header = () => {
  return (
    <div className="bg-black mx-auto items-center justify-between  flex px-10 py-3">
      <div className="flex items-center gap-1">
        <i className="flex items-center">
          <CgAbstract className="text-xl text-white" />
        </i>
        <p className="text-white font-bold">Abstract</p>
        <p className="text-white ">| Help Center</p>
      </div>
      <button className="rounded-lg border-2 py-1 px-5 border-white/30 text-white bg-slate-800 hover:bg-white/30">
        Submit a request
      </button>
    </div>
  );
};

export default Header;
