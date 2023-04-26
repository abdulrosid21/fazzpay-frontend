import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FiMenu, FiX } from "react-icons/fi";
import Cookies from "js-cookie";

function Navbar() {
  const router = useRouter();
  const [hamburger, setHamburger] = useState(false);
  const token = Cookies.get("token");
  return (
    <>
      <Head>
        <title>Fazzpay</title>
      </Head>
      <header className={`${hamburger ? "h-screen" : ""} flex flex-col`}>
        <div className="flex justify-between items-center shadow-md p-4 sm:p-6 xl:px-12">
          <div
            className="text-primary font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl cursor-pointer my-auto font-nunito"
            onClick={() => router.push("/")}
          >
            Fazzpay
          </div>
          {token ? (
            <button
              className="hidden sm:block bg-primary sm:text-sm xl:text-lg text-white shadow w-28 xl:w-32 py-3 font-semibold rounded-xl"
              onClick={() => router.push("/dashboard")}
            >
              Dashboard
            </button>
          ) : (
            <div className="hidden sm:flex sm:gap-x-2 xl:gap-x-4">
              <button
                className="w-24 h-10 bg-transparent rounded-md border-2 border-[#6379F4] text-[#6379F4] font-nunito"
                onClick={() => router.push("/signin")}
              >
                Login
              </button>
              <button
                className="w-24 h-10 bg-[#6379F4] border-2 border-[#6379F4] rounded-md text-white font-nunito"
                onClick={() => router.push("/signup")}
              >
                Register
              </button>
            </div>
          )}
          <div className="sm:hidden">
            <button onClick={() => setHamburger(!hamburger)}>
              {hamburger ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 ${
            hamburger ? "flex" : "hidden"
          } flex-col gap-y-4 justify-center items-center px-4 sm:hidden`}
        >
          {token ? (
            <button
              className="bg-primary sm:text-sm xl:text-lg text-white shadow w-28 xl:w-32 py-3 font-semibold rounded-xl"
              onClick={() => router.push("/dashboard")}
            >
              Dashboard
            </button>
          ) : (
            <>
              <button
                className="bg-white text-primary border-primary shadow border-2 w-28 py-2 font-semibold rounded-xl"
                onClick={() => router.push("/signin")}
              >
                Login
              </button>
              <button
                className="bg-primary text-white shadow w-28 py-2 font-semibold rounded-xl"
                onClick={() => router.push("/signup")}
              >
                Register
              </button>
            </>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
