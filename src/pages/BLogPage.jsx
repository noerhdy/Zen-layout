import React from "react";
import { layoutColor } from "./HomePage.jsx";

const BlogPage = () => {
  return (
    <section className={`${layoutColor}`}>
      <div className="py-44 "></div>
      <div className="grid grid-cols-5 mx-10 sm:mx-24 py-12  ">
        {/* head */}
        <div className="col-span-5 col-start-1 col-end-6 sm:col-start-2 sm:col-end-5 cursor-default  ">
          {/* content */}
          <div className="grid grid-cols-6 gap-6  ">
            <div className="col-span-7 sm:col-span-6 relative overflow-hidden ">
              <img
                className="object-cover sm:w-auto sm:h-auto w-full h-full bg-center rounded-md "
                src="image/br.webp"
              ></img>
            </div>
            <div className="col-span-7 ">
              <div className="flex flex-col justify-start items-start py-24 space-y-8 ">
                <h1 className="text-2xl tracking-tight">Blade-Runner 2049</h1>
                <span className="text-xl tracking-tight">2017</span>
                <p className="w-full text-justify  text-xs sm:text-lg sm:leading-10 leading-8 text-black dark:text-zinc-300 underline-offset-8">
                  In the future year of 2049, in a dark and futuristic Los
                  Angeles, a blade runner named <i>K</i> is tasked with hunting
                  down replicants—rebellious synthetic humans. During one of his
                  missions, K discovers a significant secret: a replicant can
                  give birth, something considered impossible. This revelation
                  threatens the stability of society. Driven by his curiosity, K
                  investigates further and eventually finds Rick Deckard, a
                  former blade runner who has been missing for three decades.
                  Together, they delve deeper into this mystery, confronting the
                  truths about identity, memory, and{" "}
                  <blockquote className="text-black dark:text-white bg-zinc-200  dark:bg-zinc-800 inline tracking-wider">
                    what it means to be human.
                  </blockquote>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
