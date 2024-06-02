import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(theme === "dark");

  useEffect(() => {
    // Saat komponen dimuat, cek nilai penyimpanan lokal
    const storedTheme = localStorage.getItem("theme");
    setIsChecked(storedTheme === "dark");
  }, []);

  const handleCheckboxChange = () => {
    const newCheckedStatus = !isChecked;
    setIsChecked(newCheckedStatus);
    const newTheme = newCheckedStatus ? "dark" : "light";

    setTheme(newTheme);
    // Simpan status tema ke penyimpanan lokal
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block h-8 w-14 rounded-full border dark:border-zinc-800 bg-primary ${
              isChecked ? "" : ""
            }`}
          ></div>
          <div
            className={`absolute 50 left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 transition-transform duration-300 ${
              isChecked ? "translate-x-6" : ""
            }`}
          >
            {isChecked ? (
              <Moon size={15} className="dark:text-white items-center" />
            ) : (
              <Sun size={15} className="dark:text-white items-center" />
            )}
          </div>
        </div>
      </label>
    </>
  );
};

export default ToggleButton;
