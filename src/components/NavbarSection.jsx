import React from "react";
import ToggleButton from "@/demo/ToggleButton";
import { NavLink, Outlet } from "react-router-dom";

export const dataTwitter = {
  name: "X",
  url: " ",
};
const handleClick = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

function NavbarSection() {
  return (
    <header>
      <nav>
        <div className=" py-12  px-6 sm:px-32 fixed inset-x-0 z-50 justify-between items-center flex text-color  bg-neutral-50 dark:bg-zinc-950 dark:text-white">
          <div className=" ">
            <NavLink
              to="/"
              preventScrollReset={true}
              className={({ isActive }) =>
                isActive ? "dark:text-neutral-50  text-black" : "text-zinc-400"
              }
            >
              <h1 className="text-2xl font-normal hover:text-zinc-600  tracking-tighter ease-in-out duration-300 transition-all">
                Zen
              </h1>
            </NavLink>
          </div>
          <div className="flex items-center gap-8">
            <NavLink
              to="about"
              preventScrollReset={true}
              className={({ isActive }) =>
                isActive
                  ? " dark:text-neutral-50  text-black"
                  : " text-zinc-400"
              }
            >
              <span className="hover:text-zinc-600 font-normal  ease-in-out duration-300 transition-all">
                About
              </span>
            </NavLink>
            <span
              onClick={() => handleClick(dataTwitter.url)}
              className="text-zinc-400 dark:hover:text-neutral-600 dark:text-zinc-400 hover:text-zinc-600 cursor-pointer"
            >
              {dataTwitter.name}
            </span>
            <ToggleButton />
          </div>
        </div>
      </nav>
      <Outlet />
    </header>
  );
}

export default NavbarSection;
