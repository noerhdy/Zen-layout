import React from "react";
import CarddHero from "../demo/CardHero.jsx";
import { Link } from "react-router-dom";
import { layoutColor } from "@/pages/HomePage.jsx";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className={`${layoutColor}`}>
      <div className="h-[233px] "></div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" flex flex-col min-h-screen items-center "
      >
        {/* head */}
        <div className=" w-full">
          <div className="mb-14 space-y-2 text-center ">
            <h1 className="md:text-5xl text-6xl dark:text-neutral-200 text-neutral-900 font-semibold">
              Zen - A minimal gallery
            </h1>
            <h2 className="md:text-md text-lg text-[#4E4F51] font-medium">
              Where minimalism meets elegance—experience <br /> a balanced and
              clutter-free design.
            </h2>
          </div>
          {/* content */}
          <div className=" relative  rounded-2xl md:min-w-[952px]  duration-300 ease overflow-hidden mb-[34px]">
            <Link to="blade-runner2049" preventScrollReset={true}>
              <img
                className="object-cover h-[400px] md:h-[562px]  w-full bg-center "
                src="thumbnail/pureSpace.webp"
                alt="Pure Space Thumbnail"
              ></img>
              <div className="text-neutral-900 absolute bottom-0 p-4 flex flex-col space-y-2 bg-neutral-50 w-full">
                <h1 className="md:text-4xl text-xl font-semibold">
                  Pure Space
                </h1>
                <span className="md:text-lg text-md">
                  Embracing simplicity through clean lines and functional spaces
                </span>
              </div>
            </Link>
          </div>

          <CarddHero />
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
