import React from "react";
import { dataCards } from "../constants";
import { Link } from "react-router-dom";

const CardHero = () => {
  return (
    <>
      <div className="flex flex-wrap gap-[34px]  flex-col md:flex-row ">
        {dataCards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-2xl md:w-[calc(50%-17px)] duration-300 ease overflow-hidden"
          >
            <Link to={`/${card.link}`}>
              <img
                className="object-cover w-full h-[400px] md:h-[562px] bg-center"
                src={card.thumbnail}
                alt={card.name}
              />
              <div className="absolute bottom-0 flex flex-col p-4 space-y-2 text-neutral-900 bg-neutral-50 w-full">
                <h1 className="text-xl font-semibold md:text-4xl">
                  {card.title}
                </h1>
                <h2 className="text-sm md:text-lg">{card.desc}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardHero;
