import React from "react";
import { dataCards } from "../constants";
import { Link } from "react-router-dom";

const CardHero = () => {
  const first =
    "col-span-2 sm:col-span-1   relative rounded-lg hover:scale-90  duration-300 ease";
  const sec =
    "object-cover w-full h-full bg-center duration-500 ease-in-out rounded-lg  ";

  return (
    <>
      <div className="grid grid-cols-2 gap-12 mt-12">
        {dataCards.map((card, index) => (
          <div key={index} className={`${first}`}>
            <Link to={`/${card.link}`}>
              <img className={`${sec}`} src={card.thumbnail}></img>
              <div className="text-white absolute bottom-0 p-4 flex flex-col whitespace-pre-line tracking-tighter ">
                <span className="text-xl">{card.date}</span>
                <h1 className="text-2xl">{card.name}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardHero;
