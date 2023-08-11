import React from "react";
import Logo from "../assets/polygon.png";
const Navbar = () => {
  return (
    <div className="bg-[white] py-4 px-8 flex items-center justify-between">
      <img src={Logo} />
      <div className="flex gap-x-4">
        <div className="flex w-[150px] h-[20px] bg-[rgba(4,120,87,0.10)]"></div>
        <div className="flex w-[80px] h-[20px] bg-[rgba(4,120,87,0.10)]"></div>
        <div className="flex w-[100px] h-[20px] bg-[rgba(4,120,87,0.10)]"></div>
        <div className="flex w-[60px] h-[20px] bg-[rgba(4,120,87,0.10)]"></div>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="flex w-[24px] h-[24px] bg-[rgba(4,120,87,0.10)]"></div>
        <div className="flex w-[40px] h-[40px] bg-[#307C5A] rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
