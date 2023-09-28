import React from "react";

export default function BirthdayCard() {
  const getAge = () => {
    const birthDate = new Date(2002, 11, 25);
    const currentDate = new Date();
    const ageInMillis = currentDate - birthDate;
    const ageInYears = Math.floor(ageInMillis / (365.25 * 24 * 60 * 60 * 1000));
    return ageInYears;
  };

  return (
    <div className="text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-[#ff4848d3] p-4 justify-center items-center">
      <div className="">
        <div className="flex justify-center items-center flex-col">
          <p className="text-xs md:text-lg uppercase font">Age</p>
          <p className="text-4xl md:text-8xl font-bold">{getAge()}</p>
          <p className="text-xs md:text-xl uppercase font-semibold text-center">
            years old
          </p>
        </div>
      </div>
    </div>
  );
}
