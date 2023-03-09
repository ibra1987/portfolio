import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {FaReact} from "react-icons/fa"
import {SiHtml5,SiJavascript,SiTypescript,SiExpress,SiTailwindcss} from "react-icons/si"
import {IoLogoCss3} from "react-icons/io"
import {TbBrandNextjs} from "react-icons/tb"
import NavBar from "../NavBar";

type skill ={
  value:string,
  icon:JSX.Element | null
}  
const filters: skill[] = [

 {
  value:"Vanilla Js",
  icon:<span className=" p-3 text-2xl flex justify-center items-center border rounded-full   text-yellow-300"><SiJavascript/></span>
 },
  {
    value:"Vanilla Ts",
    icon:<span className="p-3 text-2xl flex justify-center items-center border rounded-full   text-blue-400"><SiTypescript/></span>
  },
  {
    value:"React",
    icon:<span className="p-3 text-2xl p flex justify-center items-center border rounded-full  text-blue-500"><FaReact/></span>
  },
  
 {
  value: "Next js",
  icon:<span className="p-3 text-2xl p flex justify-center items-center border rounded-full  text-black"><TbBrandNextjs/></span>
},
  {
    value:"Express Js",
    icon:<span className="p-3 text-2xl p flex justify-center items-center border rounded-full   text-gray-400"><SiExpress/></span>
  },
  {
  value:"Tailwind css",
  icon:<span className="p-3 text-2xl p flex justify-center items-center border rounded-full   text-cyan-400"><SiTailwindcss/></span>

  }
];

type propTypes = {
  darkMode: Boolean;
  setRef: () => void;
};
type currentFilters = {
  active: string;
  next: string;
  previous: string;
};
const Hero = ({ darkMode, setRef }: propTypes) => {
  
  // const middlElement =
  //   filters.length % 2 !== 0
  //     ? filters.indexOf(filters[Math.floor(filters.length / 2)])
  //     : filters.indexOf(filters[Math.floor(filters.length / 2) - 1]);
  // const [cursor, setCursor] = useState(middlElement);
  // const [appliedFilters, setAppliedFilters] = useState<currentFilters>({
  //   active: "",
  //   next: "",
  //   previous: "",
  // });
  // useEffect(() => {
  //   setDispplayFilters();
  // }, [cursor]);
  // const resetToNext = () => {
  //   setCursor((prev) => prev + 1);
  // };
  // const resetToPrev = () => {
  //   setCursor((prev) => prev - 1);
  // };

  // const setDispplayFilters = () => {
  //   if (cursor > filters.length - 1) {
  //     setCursor(0);
  //   }
  //   if (cursor < 0) {
  //     setCursor(filters.length - 1);
  //   }
  //   if (cursor === filters.length - 1) {
  //     setAppliedFilters({
  //       active: filters[filters.length - 1],
  //       next: filters[0],
  //       previous: filters[filters.length - 2],
  //     });
  //   } else if (cursor === 0) {
  //     setAppliedFilters({
  //       active: filters[0],
  //       next: filters[cursor + 1],
  //       previous: filters[filters.length - 1],
  //     });
  //   } else {
  //     setAppliedFilters({
  //       active: filters[cursor],
  //       next: filters[cursor + 1],
  //       previous: filters[cursor - 1],
  //     });
  //   }
  // };

  return (
    <section className="w-full flex flex-col justify-center items-center ">
      <div
        className={
          "w-11/12 lg:w-3/5 flex flex-col justify-start py-5 border items-center leading-5 bg-white"
        }
      >
        <h1
          className={"text-3xl text-gray-800 md:text-4xl lg:text-5xl  font-extrabold "}
        >
          {" "}
          Hi, I am Brahim
        </h1>

        <h2 className="w-full md:w-4/5 py-3 tracking-wider text-lg my-2 md:text-lg lg:text-2xl  text-center font-extrabold rounded bg-gray-800 text-gray-50">
          {" "}
          A Junior FullStack Javascript Developer
        </h2>
        <p className={"px-2 w-11/12 lg:w-4/5"}>
          a self-taught junior developer eager to learn and grow in the world of
          programming. Although I'm new to the industry, I'm passionate about
          coding and have spent countless hours studying and practicing various
          programming languages and technologies.
        </p>
      </div>
      <div
        className={
          "w-full  md:w-3/5 flex justify-center items-center space-x-4 my-6"
        }
      >
        <button
          className={
            "text-white font-medium  bg-gray-800 p-2 px-4   text-center text-xl rounded border-2 border-gray-50 tracking-widest hover:bg-gray-50"
          }
          onClick={setRef}
        >
          My works
        </button>
        <Link
          className={
            "bg-yellow-300 font-medium  text-gray-800 p-2 px-6  text-center text-xl rounded tracking-widest  transition-colors delay-100 hover:bg-gray-500"
          }
          to={"/contact"}
        >
          Contact Me
        </Link>
      </div>
      <div
        className={
          "w-full flex justify-center items-center space-x-8 my-4 text-xl"
        }
      >
        <Link  to="https://github.com/ibra1987">
          <span className={"border-outGi hover:text-[lightslategrey]"}>
            {" "}
            <BsGithub />
          </span>
        </Link>
        <Link  to="/linkedin">
          <span className={" border-outIn hover:text-[#0072B1]"}>
            <BsLinkedin />
          </span>
        </Link>
      </div>
      <NavBar/>

      <div
        className={
          "w-full  border-t flex flex-col justify-start items-center  p-6 rounded mt-8 "
        }
      >
        <h2 className="text-3xl text-gray-800 tracking-wider my-4 font-extrabold">Tech Stack</h2>
        <div className="w-full mx-auto   text-center flex justify-evenly items-center ">
          {filters.map((filter,index) => {
            return <div key={index} className={"mx-3  flex flex-col justify-center items-center "}> 
                     <h2 className="text-center my-3" key={index}> {filter["value"]}</h2>
                     <div className="flex justify-start items-center">{filter.icon}    </div>          
              </div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
