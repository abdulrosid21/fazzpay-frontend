import React from "react";
import Image from "next/image";

function Landingpage() {
  return (
    <div className="w-screen h-[300px] bg-primary text-white font-nunito">
      <div className="w-4/5 h-full flex flex-col mx-auto justify-center">
        <h2 className="text-3xl font-bold mb-2 font-nunito">Fazzpay</h2>
        <p className="text-lg mb-4">
          Simplify financial needs and saving <br></br> much time in banking
          needs with <br></br> one single app.
        </p>
        <div className="border-t border-white my-4"></div>
        <div className="flex justify-between text-base">
          <p>2020 FazzPay. All right reserved.</p>
          <p>
            +62 5637 8882 9901 <span>contact@fazzpay.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
