import { Icon } from "@iconify/react";
import React, { useState } from "react";

export default function Input({ id, type, placeholder, icon, onChange }) {
  const [showText, setShowText] = useState(false);
  const handleShowText = () => {
    setShowText(!showText);
  };
  return (
    <div className="w-full flex border-b-2">
      <label htmlFor={id} className="w-full relative block">
        <input
          type={showText ? "text" : type}
          id={id}
          name={id}
          className="w-full border-transparent px-10 py-3 placeholder:text-[#A9A9A9CC] border-b-[1.5px]  peer focus:outline-none focus:border-primary focus:border-transparent focus:ring-0"
          placeholder={placeholder}
          onChange={onChange}
        />
        <Icon
          icon={icon}
          className={
            "absolute top-0 bottom-0 my-auto text-[#A9A9A999] text-xl peer-focus:text-primary"
          }
        />
      </label>
      <div
        onClick={handleShowText}
        className="flex justify-center m-auto cursor-pointer"
      >
        {type === "password" && (
          <Icon
            icon={showText ? "bi:eye-slash" : "bi:eye"}
            fontSize={20}
            color="#6379F4"
          />
        )}
      </div>
    </div>
  );
}
