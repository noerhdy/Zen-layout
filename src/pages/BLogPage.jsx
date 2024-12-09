import React from "react";

const BlogPage = () => {
  return (
    <section className="bg-[#D9D9D9] dark:bg-[#0D0D0D] dark:text-white flex flex-col min-h-screen items-center">
      <div className="w-full max-w-screen-lg">
        {/* Header Section */}
        <div className="w-full md:mb-[55px] mb-[33px]">
          <div className="flex flex-col items-center">
            <img
              src="thumbnail/pureSpace.webp"
              alt="Pure Space Thumbnail"
              className=" object-cover w-full h-auto max-h-[500px] bg-center"
            />
          </div>
        </div>

        {/* Synopsis Section */}
        <div className="mb-[55px] ">
          <div className="flex flex-col space-y-4 items-start">
            <h1 className="md:text-5xl text-6xl dark:text-neutral-200 text-neutral-900 font-bold">
              Pure Space
            </h1>
            <p className="text-justify text-md sm:text-xl leading-10 sm:leading-10 text-black dark:text-zinc-300 tracking-wide">
              Embracing simplicity through clean lines, functional spaces, and
              intentional design choices that focus on clarity and purpose. Each
              element serves a role, ensuring every detail works harmoniously to
              create a space that feels calm, balanced, and timeless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
