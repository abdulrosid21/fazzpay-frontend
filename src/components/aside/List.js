import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import axiosClient from "../../utils/axiosServer";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setModal } from "../../redux/actions/topup";
import { loadingPage } from "../../redux/actions/transfer";

export default function List({ page, icon, content }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const active = page === content ? true : false;

  const handleClick = () => {
    switch (content) {
      case "Dashboard":
        router.push("/dashboard");
        break;
      case "Transfer":
        dispatch(loadingPage());
        router.push("/transfer");
        break;
      case "Top Up":
        dispatch(setModal(true));
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
    <li
      className={`flex items-center pl-7 gap-x-4 cursor-pointer ${
        active
          ? "text-primary border-l-4 border-primary font-semibold"
          : "text-dark pl-8"
      }`}
      onClick={handleClick}
    >
      <Icon icon={icon} className={`text-2xl`} />
      <span className="text-lg">{content}</span>
    </li>
  );
}
