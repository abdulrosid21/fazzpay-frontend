import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useEffect } from "react";

export default function Input({
  type,
  name,
  id,
  value,
  placeholder,
  icon,
  onChange,
  isError,
}) {
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState(isError);
  const [showText, setShowText] = useState(false); // menambahkan state untuk menentukan apakah teks harus ditampilkan atau disembunyikan

  useEffect(() => {
    setError(isError);
  }, [isError]);

  // Menentukan apakah tipe input password harus diubah menjadi "text" atau "password" ketika icon mata di klik
  const handleShowText = () => {
    setShowText(!showText);
  };

  return (
    <div
      className={`relative border-b-[1.5px] flex ${
        focus ? "border-primary" : "border-[#A9A9A999]"
      } ${error ? "border-error" : ""}`}
    >
      <Icon
        icon={icon}
        className={`absolute text-2xl top-3 ${
          focus ? "text-primary" : "text-[#A9A9A999]"
        } ${error ? "text-error" : ""}`}
      />
      <input
        type={showText ? "text" : type} // menentukan tipe input berdasarkan state showText
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => {
          setFocus(true);
          setError(false);
        }}
        onBlur={() => setFocus(false)}
        required={true}
        className="pl-10 py-3 w-full text-dark font-medium placeholder:text-[#A9A9A9CC] font-nunito placeholder:font-nunito border-transparent focus:outline-none focus:border-transparent focus:ring-0"
      />
      <div onClick={handleShowText} className="my-auto cursor-pointer">
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
