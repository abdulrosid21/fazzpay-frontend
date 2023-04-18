import React from "react";

import Link from "next/link";
function Navbar() {
  return (
    <div className="w-screen h-24 bg-[#E5E5E5] rounded-b-md shadow-md">
      <div className="w-[80%] h-full flex justify-between mx-auto">
        <h1 className="my-auto text-5xl font-bold text-[#6379F4] cursor-pointer">
          FazzPay
        </h1>
        <div className="my-auto flex gap-5">
          <Link href="/signin">
            <button className="w-24 h-10 bg-transparent rounded-md border-2 border-[#6379F4] text-[#6379F4] font-nunito">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="w-24 h-10 bg-[#6379F4] border-2 border-[#6379F4] rounded-md text-white font-nunito">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
