import React, { useState } from "react";

export default function InputPin({ name, value, tabIndex, onChange, onKeyUp }) {
  const [focus, setFocus] = useState(false);
  return (
    <div
      className={`border ${
        focus ? "border-primary" : "border-[#A9A9A999]"
      } bg-transparent rounded-md flex justify-center items-center`}
    >
      <input
        type="text"
        autoComplete="off"
        name={name}
        value={value}
        tabIndex={tabIndex}
        onChange={onChange}
        onKeyUp={onKeyUp}
        pattern="\d*"
        className="w-full h-full text-center bg-transparent text-xl font-semibold py-3 rounded-md focus:outline-none focus:ring-0"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        maxLength="1"
        size="1"
      />
    </div>
  );
}
