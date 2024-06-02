import React from "react";
import { useParams, Link } from "react-router-dom";
import { dataCards } from "../constants"; // Asumsi path file benar
import { layoutColor } from "./HomePage";

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
    <section className={`${layoutColor}`}>
      <div className="py-44"></div>
      <div className="grid grid-cols-5 mx-10 sm:mx-24 py-12">
        <div className="col-span-5 col-start-1 col-end-6 sm:col-start-2 sm:col-end-5 cursor-default">
          <div className="grid grid-cols-6 auto-rows-min auto-cols-min gap-6">
            <div className="col-span-7 sm:col-span-6 relative overflow-hidden">
              <img
                className="object-cover sm:w-auto sm:h-auto w-full h-full bg-center rounded-lg "
                src={blogData.src}
                alt={blogData.name}
              />
            </div>
            <div className="col-span-7 ">
              <div className="flex flex-col justify-start items-start py-24 space-y-8">
                <h1 className="text-2xl tracking-tight">{blogData.name}</h1>
                <span className="text-xl tracking-tight">{blogData.date}</span>
                <p className="w-full pb-24 text-justify text-xs sm:text-lg  sm:leading-10 leading-8  text-black dark:text-zinc-300">
                  {/* Tambahkan deskripsi yang lebih detail di sini */}
                  {blogData.detail}
                </p>
                <div className="col-span-7 sm:col-span-6 relative rounded-lg hover:scale-90 duration-300 ease overflow-hidden">
                  <Link to={`/${nextBlogData.link}`}>
                    <img
                      className="object-cover sm:w-auto sm:h-auto w-full h-full bg-center duration-500 ease-in-out rounded-lg "
                      src={nextBlogData.src}
                    ></img>

                    <div className="text-white absolute bottom-0 p-4 flex flex-col ">
                      <span className="text-xl">{nextBlogData.date}</span>
                      <h1 className="text-2xl">{nextBlogData.name}</h1>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicBlogPage;

// Menemukan entri blog saat ini: const currentIndex = dataCards.findIndex(card => card.link === blogLink);
// Menentukan indeks entri blog berikutnya: const nextIndex = (currentIndex + 1) % dataCards.length;
// Mengambil data entri blog berikutnya: const nextBlogData = dataCards[nextIndex];
// Menambahkan tautan "Next Page" di bagian bawah konten: <Link to={/${nextBlogData.link}} className="text-blue-500 hover:underline mt-4">Next Page: {nextBlogData.name}</Link>
