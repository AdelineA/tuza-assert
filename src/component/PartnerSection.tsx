import React from "react";
import ReviewCard from "./card/ReviewCard";

import eqty from "../assets/eqty.jpg";
import bk from "../assets/bk.jpg";
import radiant from "../assets/radiant.png";

const PartnerSection = () => {
  return (
    <div className="bg-green-800">
      <div className="ml-20 px-5">
        <h1 className="text-white font-bold text-2xl pt-4 mb-8">
          What People Say
        </h1>
        <div className="gap-5 whitespace-nowrap overflow-x-auto flex">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <div className="uppercase text-2xl text-white font-bold py-8">
          Our Partners
        </div>
        <div className="flex gap-4 p-3">
          <img src={radiant} alt="radiant" className="w-24 h-24" />
          <img src={bk} alt="bk" className="w-24 h-24" />
          <img src={eqty} alt="equity" className="w-24 h-242" />
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
