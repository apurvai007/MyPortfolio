import moment from "moment";
import React from "react";
import { CountUp } from "use-count-up";

export default function ExpCard() {
  const getExp = () => {
    let years = moment().diff(moment([2022, 1, 1]), "years");
    return years;
  };

  return (
    <div className="text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-blue-400/80 p-4 justify-center items-center">
      <div className="">
        <div className="flex justify-center items-center flex-col">
          <p className="text-4xl md:text-8xl font-bold">
            <CountUp isCounting end={getExp()} duration={6} />+
          </p>
          <p className="text-xs md:text-xl uppercase font-semibold text-center">
            Years of
          </p>
          <p className="text-xs md:text-xl uppercase font-semibold text-center">
            Work experience
          </p>
        </div>
      </div>
    </div>
  );
}
