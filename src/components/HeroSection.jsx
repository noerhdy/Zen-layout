import React from "react";
import CarddHero from "../demo/CardHero.jsx";
import { Link } from "react-router-dom";
import { layoutColor } from "@/pages/HomePage.jsx";
import { motion } from "framer-motion";

const HeroSection = () => {
  const dataUrl = [
    {
      name: "Visual Studio",
      url: "https://code.visualstudio.com/",
    },
    {
      name: "React",
      url: "https://react.dev/",
    },
  ];
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={`${layoutColor}`}>
      <div className="py-44 "></div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-6 py-12  "
      >
        {/* head */}
        <div className="  col-start-1 sm:col-start-2 col-span-6 sm:col-span-4 mx-6 sm:mx-24   ">
          <div className="mb-32 space-y-2 text-start ">
            <h1 className="text-2xl md:text-5xl ">
              Zen - A minimal layout sample
            </h1>
            <h2 className="text-2xl  md:text-5xl">
              built on{" "}
              {dataUrl.map((data, index) => (
                <React.Fragment key={index}>
                  <span
                    onClick={() => handleClick(data.url)}
                    className="text-zinc-300 hover:text-black dark:text-zinc-700 dark:hover:text-white cursor-pointer "
                  >
                    {data.name}
                  </span>
                  {index === dataUrl.length - 2
                    ? " & "
                    : index < dataUrl.length - 1
                    ? ", "
                    : ""}
                </React.Fragment>
              ))}
              .
            </h2>
          </div>
          {/* content */}
          <div className="col-start-2 gap-12  ">
            <div className="col-span-6 relative  rounded-lg hover:scale-90 duration-300 ease overflow-hidden ">
              <Link to="blade-runner2049" preventScrollReset={true}>
                <img
                  className="object-cover sm:w-full sm:h-full w-auto h-[400px] bg-center duration-500 ease-in-out rounded-lg "
                  src="thumbnail/brT.webp"
                ></img>
                <div className="text-white absolute bottom-0 p-4 flex flex-col">
                  <span className="text-xl">2017</span>
                  <h1 className="text-2xl">Blade Runner 2049</h1>
                </div>
              </Link>
            </div>

            <CarddHero />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

// Menggunakan React.Fragment
// dengan key untuk membungkus elemen span dan tanda pemisah.
//
// Kondisional memeriksa apakah index adalah yang kedua terakhir
// (index === dataUrl.length - 2). Jika benar, tambahkan &.
// Jika tidak, tambahkan , jika bukan item terakhir.
