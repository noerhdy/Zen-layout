import React from "react";
import { dataContacts } from "@/constants";

const AboutPage = () => {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-zinc-50 dark:bg-zinc-950 dark:text-white">
      <div className="py-44"></div>
      <div className="grid grid-cols-5 mx-10 sm:mx-24 py-12  ">
        {/* head */}
        <div className="col-span-5 col-start-1 col-end-6 sm:col-start-2 sm:col-end-5 cursor-default  ">
          {/* content */}
          <div className="grid grid-cols-6 auto-rows-min auto-cols-min gap-6  ">
            <div className="col-span-7 sm:col-span-6 relative overflow-hidden ">
              <div className="bg-zinc-900 dark:bg-zinc-900 flex justify-center rounded-2xl h-72  items-center w-full">
                <h1 className="text-8xl font-semibold text-zinc-950 tracking-widest">
                  Zen
                </h1>
              </div>
              {/* <img
                className="object-cover sm:w-auto sm:h-auto w-full h-full bg-center "
                src="image/about.webp"
              ></img> */}
            </div>
            {/* Text */}
            <div className="col-span-7 ">
              <div className="flex flex-col sm:flex-row justify-start items-start py-24 sm:space-y-0 space-y-4 ">
                <h1 className="w-3/6 text-2xl ">About</h1>
                <p className="w-full text-justify text-xs sm:text-lg leading-10 text-black dark:text-zinc-300">
                  This section is dedicated to providing information about our
                  identity and objectives. Our goal is to offer a clear overview
                  of who we are, what we do, the values ​​we uphold, and to
                  provide visitors with a deep understanding of our mission and
                  vision.
                </p>
              </div>
              {/* Text */}
              <div className="flex flex-col sm:flex-row space-y-4">
                <h1 className="w-3/6 text-2xl ">Contact</h1>
                <div className="w-full space-y-10 flex flex-col text-start justify-start items-start">
                  {dataContacts.map((dataContacts, index) => (
                    <h1
                      key={index}
                      className="flex flex-col gap-4 text-xl font-normal  "
                    >
                      {dataContacts.name}
                      <span
                        onClick={() => handleClick(dataContacts.url)}
                        className="cursor-pointer text-lg  text-zinc-400 hover:text-zinc-900 ease-in-out duration-300 transition-all dark:text-zinc-700 hover:dark:text-zinc-500"
                      >
                        {dataContacts.username}
                      </span>
                    </h1>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
