"use client";
import { useState } from "react";

function Toggle() {
  const [enabled, setEnabled] = useState(false);

  const handleToggle = () => {
    setEnabled(!enabled);
  };

  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="toggle" className="relative">
        <input
          type="checkbox"
          id="toggle"
          className="sr-only"
          checked={enabled}
          onChange={handleToggle}
        />
        <div
          className={`block ${
            enabled ? "bg-[#FF7E08]" : "bg-gray-300"
          } w-[46px] h-5 rounded-full`}
        ></div>
        <div
          className={`dot absolute ${
            enabled ? "left-7 bg-white" : "left-[3px] bg-[#FF7E08]"
          } top-[2px] w-4 h-4 rounded-full transition`}
        ></div>
      </label>
    </div>
  );
}

export default Toggle;
