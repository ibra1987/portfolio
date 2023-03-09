import { useState } from "react";

type propTypes = {
  filter: string | number;
  filterType : string
};

const FilmTape = ({ filter,filterType }: propTypes) => {
const secClass = filterType !== "active" && " opacity-40 " 
const activeClass = filterType === "next" ? " swipeRigth " : filterType === " previous" ? " swipeLeft " : " "
  const singleGridItemClass = " w-6 h-4 border-4 border-gray-700  ";
  return (
    <div
       
      className={ secClass + activeClass   +
        " h-44 w-60  flex flex-col justify-center items-start border-4 border-gray-700"
      }
    >
      <div className={"w-full grid  grid-cols-10 gap-0  rounded"}>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
      </div>
      <div className={"w-full h-56 border-gray-700 border-4 "}>{filter}</div>
      <div className={"w-full grid  grid-cols-10 gap-0 rounded"}>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
        <div className={singleGridItemClass}></div>
      </div>
    </div>
  );
};

export default FilmTape;
