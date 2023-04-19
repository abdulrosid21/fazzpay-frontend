import React from "react";
import Brand from "../logoName";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/router";
import { modal } from "../../redux/actions/topup";
import axiosClient from "../../utils/axiosServer";
import Cookies from "js-cookie";
import { loadingPage } from "../../redux/actions/transfer";

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const dataUser = useSelector((state) => state.user.data);
  console.log(dataUser);
  const [hamburger, setHamburger] = useState(false);

  const handleClick = (content) => {
    switch (content) {
      case "Dashboard":
        router.push("/home");
        break;
      case "Transfer":
        dispatch(loadingPage());
        router.push("/transfer");
        break;
      case "Top Up":
        dispatch(modal(true));
        break;
      case "Profile":
        router.push("/profile");
        break;
      case "Logout":
        axiosClient.post("auth/logout");
        Object.keys(Cookies.get()).map((item) => {
          Cookies.remove(item);
        });
        router.push("/signin");
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="flex justify-between items-center text-dark bg-white p-6 lg:px-36 lg:py-8 rounded-b-3xl shadow-md relative">
        <Brand variant={"blue"} />
        <div className="flex items-center">
          <div className="w-8 h-8 lg:w-14 lg:h-14 rounded-xl mr-3 flex bg-white">
            <Image
              className="bg-cover bg-center rounded-xl"
              src={
                dataUser.image
                  ? process.env.URL_CLOUDINARY + dataUser.image
                  : "/images/default-profile.png"
              }
              width={56}
              height={56}
              alt="profile"
            />
          </div>
          <div>
            <p className="text-sm lg:text-lg font-semibold">
              {dataUser.firstName + " " + dataUser.lastName}
            </p>
            <p className="opacity-90 text-xs lg:text-sm">
              {dataUser.noTelp ? dataUser.noTelp : "Phone Not Set"}
            </p>
          </div>
          <button
            className={`lg:hidden ml-5`}
            onClick={() => setHamburger(!hamburger)}
          >
            <FiChevronDown />
          </button>
          <Icon
            icon={"codicon:bell"}
            className={"text-2xl ml-6 hidden lg:block"}
          />
        </div>
      </div>
      <div
        className={`${
          hamburger ? "absolute" : "hidden"
        } mt-2 right-6 w-44 py-1 bg-white shadow rounded text-sm z-20`}
      >
        <ul>
          <li
            className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleClick("Dashboard")}
          >
            <a>Dashboard</a>
          </li>
          <li
            className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleClick("Transfer")}
          >
            <a>Transfer</a>
          </li>
          <li
            className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleClick("Top Up")}
          >
            <a href="">Top Up</a>
          </li>
          <li
            className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleClick("Profile")}
          >
            <a href="">Profile</a>
          </li>
          <li
            className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleClick("Logout")}
          >
            <a href="">Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
}
