import React from "react";
import { useParams, Link } from "react-router-dom";
import { dataCards } from "../constants"; // Pastikan path benar

const DynamicBlogPage = () => {
  const { blogLink } = useParams();
  const blogData = dataCards.find((card) => card.link === blogLink);

  if (!blogData) {
    return <div>Blog not found</div>;
  }

  const currentIndex = dataCards.findIndex((card) => card.link === blogLink);
  const nextIndex = (currentIndex + 1) % dataCards.length;
  const nextBlogData = dataCards[nextIndex];

  return (
    <section className="bg-[#D9D9D9] dark:bg-[#0D0D0D] dark:text-white flex flex-col min-h-screen items-center">
      <div className="w-full max-w-screen-lg">
        {/* Header Section */}
        <div className="w-full mb-[33px] md:mb-[55px]">
          <div className="flex flex-col items-center">
            <img
              src={blogData.thumbnail}
              alt={blogData.title}
              className="object-cover w-full h-auto max-h-[500px] bg-center"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="mb-[55px] ">
          <div className="flex flex-col space-y-4 items-start">
            <h1 className="md:text-5xl text-6xl dark:text-neutral-200 text-neutral-900 font-bold">
              {blogData.title}
            </h1>
            <p className="text-justify text-md sm:text-xl leading-10 sm:leading-10 text-black dark:text-zinc-300 tracking-wide">
              {blogData.detail}
            </p>
          </div>
        </div>

        {/* Next Blog Section */}
        <div className="w-full mt-[144px]">
          <Link to={`/${nextBlogData.link}`} className="block">
            <div className="flex flex-col items-center max-h-[400px] relative">
              <img
                src={nextBlogData.thumbnail}
                alt={nextBlogData.title}
                className="object-cover w-full max-h-[400px] bg-center"
              />
              <div className="absolute bottom-0 w-full flex flex-col p-4 space-y-2 text-neutral-200 bg-neutral-950">
                <h1 className="text-xl md:text-4xl font-semibold">
                  {nextBlogData.title}
                </h1>
                <h2 className="text-md md:text-lg">{nextBlogData.desc}</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DynamicBlogPage;
