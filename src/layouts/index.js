import React, { useState } from "react";
import Header from "../components/header";
import Head from "next/head";
import Aside from "../components/aside";
import Footer from "../components/footer";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../redux/actions/topup";
import axiosClient from "../utils/axios";
import { getDataUserById } from "../redux/actions/user";
import { getDataDashboard } from "../redux/actions/dashboard";
import { getDataHistory } from "../redux/actions/history";
import { useEffect } from "react";
import { resetTransferData } from "../redux/actions/transfer";

export default function Layout({ title, page, children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const token = Cookies.get("token");
  const pin = Cookies.get("pin");
  const transfer = useSelector((state) => state.transfer);
  const modalTopUp = useSelector((state) => state.topup.modal);
  const [amount, setAmount] = useState({ amount: "" });
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (
      title !== "Transfer Detail" &&
      title !== "Transfer Confirmation" &&
      title !== "Transfer Status"
    ) {
      dispatch(resetTransferData());
    }
  }, [dispatch, title]);

  const handleClose = () => {
    dispatch(setModal(false));
    setAmount({ amount: "" });
  };

  const changeInputTopUp = (e) => {
    setAmount({ ...amount, [e.target.name]: e.target.value });
  };

  const createTopUp = async (e) => {
    try {
      e.preventDefault();
      setIsError(false);
      setLoading(true);
      const result = await axiosClient.post("/transaction/top-up", amount);
      setMessage(result.data.msg);
      setLoading(false);
      handleClose();
      setToast(true);
      window.open(result.data.data.redirectUrl, "_blank");
    } catch (error) {
      setMessage(error.response.data.msg);
      setIsError(true);
      setLoading(false);
      handleClose();
      setToast(true);
    }
  };

  const closeToast = () => {
    dispatch(getDataUserById(user.data.id));
    dispatch(getDataDashboard(user.data.id));
    dispatch(getDataHistory());
    setAmount({ amount: "" });
    setIsError(false);
    setLoading(false);
    setMessage("");
    router.push("/dashboard");
    setToast(false);
  };

  if (!token) {
    router.push("/signin");
  } else if (!pin) {
    router.push("/createpin");
  }

  return token ? (
    <>
      <Head>
        <title>Fazzpay - {title} </title>
      </Head>

      {/* MODAL TOPUP */}
      <div
        className={`${
          modalTopUp ? "fixed" : "hidden"
        } w-full h-full bg-[rgba(0,0,0,0.4)] z-50`}
      >
        <div className="absolute left-0 right-0 top-0 bottom-0 m-auto w-3/4 h-fit bg-white lg:w-[40%] px-6 lg:px-9 py-8 lg:py-10 rounded-3xl">
          <div className="flex justify-between">
            <h4 className="text-dark text-lg font-semibold">Topup</h4>
            <Icon
              icon={"carbon:close"}
              className={`text-3xl cursor-pointer`}
              onClick={handleClose}
            />
          </div>

          <p className="text-[#3A3D4299] mt-5">
            Enter the amount of money, and click submit
          </p>

          <form action="" className="mt-7 grid gap-5" onSubmit={createTopUp}>
            <input
              type="number"
              min={10000}
              className="border border-[#A9A9A999] rounded-lg w-full text-center py-4"
              name="amount"
              value={amount.amount}
              onChange={changeInputTopUp}
              placeholder="0"
            />

            <div className="text-end">
              <button
                className="bg-primary text-white text-lg font-semibold py-3 rounded-lg mt-20 px-5"
                type="submit"
              >
                {loading ? (
                  <div role="status">
                    <svg
                      className="inline mr-2 w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        id="toast"
        className={`${
          message && toast ? "flex" : "hidden"
        } items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 fixed mx-auto left-0 right-0 top-10 z-50`}
        role="alert"
      >
        <div
          className={`inline-flex flex-shrink-0 justify-center items-center w-8 h-8 ${
            isError
              ? "text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200"
              : "text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
          } `}
        >
          {isError ? (
            <>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Error icon</span>
            </>
          ) : (
            <>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Check icon</span>
            </>
          )}
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success"
          aria-label="Close"
          onClick={closeToast}
        >
          <span className="sr-only">Close</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <Header />

      {/* {transfer.loadingPage ? (
        <div className="h-screen flex justify-center items-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              ></path>
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              ></path>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="px-6 lg:px-40 mt-10 flex mb-20 gap-x-5">
          <Aside page={page} />
          <main className="w-full">{children}</main>
        </div>
      )} */}
      <div className="px-6 lg:px-40 mt-10 flex mb-20 gap-x-5">
        <Aside page={page} />
        <main className="w-full">{children}</main>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  ) : (
    ""
  );
}
