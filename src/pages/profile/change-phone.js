import React from "react";
import MainHeader from "../../components/profile/MainHeader";
import Layout from "../../layouts";
import Input from "../../components/profile/Input";
import Button from "../../components/auth/button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataUserById, updatePhone } from "../../redux/actions/user";
import { useRouter } from "next/router";

export default function ChangePhone() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [form, setForm] = useState({});
  const [toast, setToast] = useState(false);

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(true);
    dispatch(updatePhone({ userId: user.data.id, form }));
  };

  const handleCloseToast = () => {
    setToast(false);
    if (!user.isError) {
      dispatch(getDataUserById(user.data.id));
      router.push("/profile");
    }
  };
  console.log(form);

  return (
    <Layout title="Change Phone Number" page={"Profile"}>
      <div
        id="toast"
        className={`${
          user.message && toast ? "flex" : "hidden"
        } items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 fixed mx-auto left-0 right-0 top-10 z-50`}
        role="alert"
      >
        <div
          className={`inline-flex flex-shrink-0 justify-center items-center w-8 h-8 ${
            user.isError
              ? "text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200"
              : "text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
          } `}
        >
          {user.isError ? (
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
        <div className="ml-3 text-sm font-normal">{user.message}</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success"
          aria-label="Close"
          onClick={handleCloseToast}
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

      <div className="bg-white rounded-3xl shadow-lg px-7 pt-7 pb-36">
        <MainHeader
          title={"Edit Phone Number"}
          content={
            "Add at least one phone number for the transfer ID so you can start transfering your money to another user."
          }
        />

        <form
          action=""
          className="w-full xl:w-[431px] mx-auto text-center mt-24"
          onSubmit={handleSubmit}
        >
          <Input
            id={"noTelp"}
            type={"number"}
            placeholder={"+62"}
            icon={"akar-icons:phone"}
            onChange={handleOnChange}
          />

          <Button
            content={"Edit Phone Number"}
            isLoading={user.isLoading}
            disable={
              toast
                ? true
                : Object.keys(form).length < 1
                ? true
                : form.noTelp
                ? false
                : true
            }
          />
        </form>
      </div>
    </Layout>
  );
}
