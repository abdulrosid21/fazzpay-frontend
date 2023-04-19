import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-between items-center px-6 lg:px-40 py-5 bg-primary text-[#EFEFEF]">
      <div className="opacity-90 text-sm lg:text-base">
        <p>2020 FazzPay. All right reserved.</p>
      </div>
      <div className="flex flex-col gap-x-10 lg:flex-row text-sm lg:text-base">
        <p>+62 5637 8882 9901</p>
        <p>contact@fazzpay.com</p>
      </div>
    </div>
  );
}
