import React from "react";
import List from "./List";
import { CgAbstract } from "react-icons/cg";

const Footer = () => {
  const data = [
    {
      id: 1,
      title: "Abstract",
      list: ["Branches"],
    },
    {
      id: 2,
      title: "Resources",
      list: ["Blog", "Help Center", "Release Notes", "Status"],
    },
    {
      id: 3,
      title: "Resources",
      list: ["Blog", "Help Center", "Release Notes", "Status"],
    },
    {
      id: 4,
      title: "Company",
      list: ["About Us", "Careers", "Legal"],
    },
  ];

  return (
    <footer className="bg-black p-8 text-white">
      <div className="container mx-auto">
        <div className="w-4/5 grid grid-cols-4">
          {data?.map((ele, ind) => (
            <List data={ele} key={ind} />
          ))}
        </div>
        <div className="w-full">
          <div className="ml-auto w-fit mr-5 ">
            <i className="text-2xl">
              <CgAbstract />
            </i>
            <p className="font-semibold ">©️ Copyright 2022</p>
            <p>Abstract Studio Design, Inc.</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
