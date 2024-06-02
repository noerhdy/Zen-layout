import React from "react";
import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";
import { dataTwitter } from "./NavbarSection";
import { layoutColor } from "@/pages/HomePage";

const FooterSection = () => {
  const profileData = {
    name: "NN",
    url: "https://hello-nn.vercel.app/",
  };

  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className={`${layoutColor}`}>
      <div className="grid grid-cols-6 py-12 ">
        <div className="sm:col-start-2 sm:col-span-4 sm:mx-24 mx-6 col-span-6 col-start-1">
          <div className="flex flex-col w-full items-start space-y-8 py-8 border border-y-1 border-x-0 border-y-zinc-300 dark:border-y-zinc-800">
            <NavLink to="about" preventScrollReset={true}>
              <span className="text-4xl">About</span>{" "}
            </NavLink>
            <span
              onClick={() => handleClick(dataTwitter.url)}
              className="text-4xl cursor-pointer"
            >
              X
            </span>
            <Button
              onClick={() => handleClick(profileData.url)}
              className="rounded-full px-10 group overflow-hidden"
            >
              <div className="flex flex-col ">
                <span className="text-lg  group-hover:invisible visible group-hover:-translate-y-4 duration-300 translate-y-3 ease-in-out tracking-tighter ">
                  lets talk
                </span>
                <span className="text-lg invisible group-hover:visible group-hover:-translate-y-4 translate-y-3 duration-300 ease-in-out tracking-tighter ">
                  lets talk
                </span>
              </div>
            </Button>
          </div>
          <div className="mb-32 py-4 flex flex-row text-start whitespace-nowrap cursor-default ">
            <h1 className="text-md tracking-wide">
              Thanks for Stopping by.{" "}
              <span
                onClick={() => handleClick(profileData.url)}
                className="text-zinc-300 hover:text-black dark:text-zinc-700 dark:hover:text-zinc-300 cursor-pointer"
              >
                {profileData.name}
              </span>{" "}
              |
            </h1>
            <h2 className="text-md ms-2"> 2024</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
