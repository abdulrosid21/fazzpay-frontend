import React from "react";

function Navbar() {
  return (
    <div className="w-screen h-20 bg-[#E5E5E5] rounded-b-md shadow-md">
      <div className="w-[80%] h-full flex justify-between mx-auto">
        <h1 className="my-auto font-nunito text-3xl font-semibold text-[#6379F4]">
          FazzPay
        </h1>
        <div className="my-auto flex gap-5">
          <button className="w-24 h-8 bg-transparent rounded-md border-2 border-[#6379F4] text-[#6379F4] font-nunito">
            Login
          </button>
          <button className="w-24 h-8 bg-[#6379F4] border-2 border-[#6379F4] rounded-md text-white font-nunito">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
