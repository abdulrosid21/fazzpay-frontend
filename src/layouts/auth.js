import React from "react";
import LeftSide from "../components/auth/leftSide";
import RightSide from "../components/auth/rightSide";
import Head from "next/head";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Auth({
  titlePage,
  title,
  subtitle,
  body,
  iconRightSide,
  toast,
}) {
  const router = useRouter();
  const token = Cookies.get("token");
  const pin = Cookies.get("pin");

  useEffect(() => {
    if (
      titlePage === "Login" ||
      titlePage === "Register" ||
      titlePage === "Reset Password" ||
      titlePage === "Forgot Password"
    ) {
      token && !toast ? router.push("/dashboard") : "";
    } else if (titlePage === "Create Pin" && !token) {
      router.push("/signin");
    } else if (titlePage === "Create Pin" && token && pin) {
      router.push("/dashboard");
    }
  });

  return (
    <div
      className={
        !pin && token && titlePage === "Create Pin"
          ? ""
          : token && !toast
          ? "hidden"
          : ""
      }
    >
      <Head>
        <title>Fazzpay | {titlePage}</title>
      </Head>
      <div className="flex lg:h-auto h-screen">
        <LeftSide />
        <RightSide
          title={title}
          subtitle={subtitle}
          body={body}
          iconRightSide={iconRightSide}
          titlePage={titlePage}
        />
      </div>
    </div>
  );
}
