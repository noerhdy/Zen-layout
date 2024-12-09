import React from "react";
import { dataContacts } from "@/constants";

const AboutPage = () => {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-[#D9D9D9] dark:bg-[#0D0D0D] dark:text-white flex flex-col min-h-screen items-center">
      <div className="w-full max-w-screen-lg  ">
        {/* Header Section */}
        <div className="w-full cursor-default ">
          <div className="w-full aspect-square max-h-[500px] bg-[#C6C5CA] dark:bg-[#161719] flex justify-center items-center mb-[34px]">
            <h1 className="text-8xl sm:text-8xl font-semibold text-[#DADADC] dark:text-[#0D0D0D] tracking-widest">
              Zen
            </h1>
          </div>

          {/* About Section */}
          <div className="mb-[55px]">
            <div className="flex flex-col sm:flex-row  md:space-y-0 space-y-4 items-start">
              <h1 className="w-full font-medium sm:w-3/6 text-5xl ">About</h1>
              <p className="w-full text-justify text-md sm:text-xl leading-10 sm:leading-10 text-black dark:text-zinc-300">
                This section is dedicated to providing information about our
                identity and objectives. Our goal is to offer a clear overview
                of who we are, what we do, the values ​​we uphold, and to
                provide visitors with a deep understanding of our mission and
                vision.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col sm:flex-row   md:space-y-0 space-y-4 ">
            <h1 className="w-full sm:w-3/6 text-5xl font-medium ">Contact</h1>
            <div className="w-full space-y-6 sm:space-y-8 flex flex-col items-start">
              {dataContacts.map((contact, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:gap-2 text-base sm:text-xl font-normal"
                >
                  {contact.name}
                  <span
                    onClick={() => handleClick(contact.url)}
                    className="cursor-pointer text-md sm:text-xl text-zinc-400 hover:text-zinc-900 transition duration-300 dark:text-zinc-700 hover:dark:text-zinc-500"
                  >
                    {contact.username}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
