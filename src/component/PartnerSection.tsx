import React from "react";
import ReviewCard from "./card/ReviewCard";

const PartnerSection = () => {
  return (
    <div className="bg-green-700">
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
      </div>
    </div>
  );
};

export default PartnerSection;
