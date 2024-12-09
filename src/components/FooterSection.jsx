import React from "react";
import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Make sure it's imported
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"; // Make sure the icon is imported
import { dataTwitter } from "./NavbarSection";

const FooterSection = () => {
  const profileData = {
    name: "NN",
    url: "https://hello-ui.vercel.app/",
  };

  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="w-full mt-[89px]">
      <div className="flex">
        <div className="flex md:flex-row flex-col w-full items-start md:items-center justify-between py-4 md:py-14 border border-y-1 border-x-0 border-y-[#4E4F51]">
          <div className="flex flex-col w-full items-start space-y-8 ">
            <h1 className="text-4xl dark:text-neutral-200 text-black">
              Designed with intention. Built for simplicity.
            </h1>
            <Button
              onClick={() => handleClick(profileData.url)}
              className="rounded-full px-10 group overflow-hidden border border-zinc-950 dark:border-neutral-200"
            >
              <div className="flex flex-col">
                <span className="text-lg group-hover:invisible text-black dark:text-neutral-200 visible group-hover:-translate-y-4 duration-300 translate-y-3 ease-in-out tracking-tighter">
                  Let's talk
                </span>
                <span className="text-lg text-neutral-200 dark:text-black invisible group-hover:visible group-hover:-translate-y-4 translate-y-3 duration-300 ease-in-out tracking-tighter">
                  Let's talk
                </span>
              </div>
            </Button>
          </div>

          <div className="gap-8 pt-8 md:justify-between md:w-full text-[#4E4F51] flex-row md:flex-col items-end hidden md:flex w-1/4">
            <NavLink to="about" preventScrollReset={true}>
              <span className="md:text-2xl text-lg cursor-pointer">About</span>{" "}
            </NavLink>
            <span>
              <FontAwesomeIcon
                onClick={() => handleClick(dataTwitter.url)}
                icon={faXTwitter}
                className="text-[#4E4F51] dark:text-[#4E4F51] hover:text-black dark:hover:text-white cursor-pointer transition-colors duration-300"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="mb-10 text-[#4E4F51] py-4 flex justify-between cursor-default text-md">
        <h1>© 2024 | Zen</h1>
        <h2> All rights reserved.</h2>
      </div>
    </footer>
  );
};

export default FooterSection;
