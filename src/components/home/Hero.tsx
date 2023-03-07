import React from "react";
import { Link } from "react-router-dom";
type propTypes = {
  darkMode: Boolean,
  setRef:()=>void
};
const Hero = ({ darkMode,setRef }: propTypes) => {
  return (
    <section className="w-full h-screen flex flex-col justify-start items-center">
      <div
        className={
          "w-full md:w-3/5 flex flex-col justify-start items-center leading-5"
        }
      >
        <h1 className={"text-6xl mt-20 font-extrabold"}> Hi, I am Brahim</h1>
        <h2 className={"tracking-wider text-3xl font-medium "}>
          and I am a fullStack Javascript Developer
        </h2>
        <p className={"leading-6 w-full md:w-4/5"}>
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
            "text-gray-800 font-medium  bg-white p-2 px-4 w-1/4  text-center text-xl rounded border-2 border-gray-50 tracking-widest hover:bg-gray-50"
          }
        
          onClick={setRef}
        >
          My works
        </button>
        <Link
          className={
            "bg-yellow-300 font-medium  text-gray-600 p-2 px-4 w-1/3  text-center text-xl rounded tracking-widest  transition-colors delay-100 hover:bg-gray-500"
          }
          to={"/contact"}
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default Hero;
