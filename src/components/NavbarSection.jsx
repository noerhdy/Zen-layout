import React from "react";
import ToggleButton from "@/demo/ToggleButton";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"; // Import Twitter icon

export const dataTwitter = {
  name: "X",
  url: "https://twitter.com",
};

const handleClick = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

function NavbarSection() {
  return (
    <header className="flex flex-col items-center">
      <nav className="fixed top-0 z-50 justify-between items-center flex w-full max-w-screen-lg pt-4 md:pt-11 pb-4 px-6 rounded-b-xl bg-[#D9D9D9] dark:bg-[#0D0D0D]">
        <div className=" ">
          <NavLink
            to="/"
            preventScrollReset={true}
            className={({ isActive }) =>
              isActive ? "dark:text-neutral-50  text-black" : "text-[#4E4F51]"
            }
          >
            <h1 className="text-2xl font-normal hover:text-zinc-600 tracking-tighter ease-in-out duration-300 transition-all">
              Zen
            </h1>
          </NavLink>
        </div>
        <div className="flex items-center gap-8">
          <NavLink
            to="about"
            preventScrollReset={true}
            className={
              ({ isActive }) =>
                isActive
                  ? "dark:text-white text-black hover:opacity-90" // Aktif: Warna putih di dark mode, hitam di light mode
                  : "text-[#4E4F51] dark:text-[#4E4F51] hover:text-black dark:hover:text-white" // Tidak aktif: Warna default dengan hover
            }
          >
            <span className="font-normal ease-in-out duration-300 transition-all">
              About
            </span>
          </NavLink>

          <span
            onClick={() => handleClick(dataTwitter.url)}
            className="text-white dark:text-white hover:text-black dark:hover:text-white cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-[#4E4F51] dark:text-[#4E4F51] hover:text-black dark:hover:text-white cursor-pointer transition-colors duration-300"
            />
          </span>

          <ToggleButton />
        </div>
      </nav>
      <Outlet />
    </header>
  );
}

export default NavbarSection;
