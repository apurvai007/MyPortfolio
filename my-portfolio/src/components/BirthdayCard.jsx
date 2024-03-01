import React, { useEffect } from "react";
import moment from "moment";
import { CountUp } from "use-count-up";

export default function BirthdayCard() {

  const getAge = () => {
    let age = moment().diff(moment([1998, 2, 19]), "years");
    return age;
  };


  return (
    <div className="text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-[#ff4848d3] p-4 justify-center items-center">
      <div className="">
        {/* <Image src={birthday} alt="" width="100" /> */}
        <div className="flex justify-center items-center flex-col">
          <p className="text-xs md:text-lg uppercase font">
            {"Age"}
          </p>
          <p className="text-4xl md:text-8xl font-bold"><CountUp isCounting end={getAge()} duration={4.5} /></p>
          <p className="text-xs md:text-xl uppercase font-semibold text-center">
            {"Years old"}
          </p>
        </div>
        {/* <p className="text-sm hidden md:flex">{`${getBirthday()} ${t("birthday.time")}`}</p> */}
      </div>
    </div>
  );
}
