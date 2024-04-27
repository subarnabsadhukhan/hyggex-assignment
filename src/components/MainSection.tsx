import { RefObject, useRef, useState } from "react";
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
import { MdOutlineLightbulb } from "react-icons/md";

const OPTIONS = [
  {
    name: "Study",
  },
  {
    name: "Quiz",
  },
  {
    name: "Test",
  },
  {
    name: "Game",
  },
  {
    name: "Others",
  },
];
const MainSection = () => {
  let r = 0;
  const redoButton: RefObject<HTMLButtonElement> = useRef(null);
  const [activeOption, setActiveOption] = useState("");
  const [speakerOn, setSpeakerOn] = useState(true);
  return (
    <div className=" flex flex-col  items-start justify-center gap-1 sm:gap-5 ">
      <h2 className="  my-5  bg-gradient-to-t from-darkslateblue-100 to-darkslateblue-200 !bg-clip-text  font-montserrat text-2xl  font-bold [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] md:text-[32px] ">
        Relations and Functions ( Mathematics )
      </h2>
      <div className="my-6 flex w-full flex-col items-center  justify-center gap-5 sm:gap-8">
        <ul className="flex w-2/3 items-center justify-center sm:gap-3 md:gap-10">
          {OPTIONS.map((option) => (
            <li
              onClick={() => setActiveOption(option.name)}
              key={option.name}
              className={` group flex  cursor-pointer flex-col items-center justify-center px-3 font-inter text-xl font-medium active:scale-90 ${activeOption === option.name ? `font-bold text-darkslateblue-200` : `text-dimgray`} `}
            >
              {option.name}
              <span
                className={` mt-1 box-border ${activeOption === option.name ? `w-[130%] border-darkslateblue-200` : `border-dimgray`}   self-center  rounded-full border-t-[2.4px] border-solid   transition-all  duration-500 ease-in-out group-hover:w-[130%]`}
              ></span>
            </li>
          ))}
        </ul>
        <div className="relative flex w-full  justify-center md:w-3/4 lg:w-[60%]">
          <div className=" flex aspect-video w-full items-center  justify-center rounded-23xl-5 bg-gradient-to-tr from-[#1F80EB] from-10% via-[#2284F1] via-20% to-[#051A91] to-95% ">
            <button className="absolute left-6 top-6 z-10  text-white hover:text-neutral-200 active:scale-90 sm:left-8  sm:top-8 ">
              <MdOutlineLightbulb className="h-5 w-5 sm:h-[34px] sm:w-[34px]" />
            </button>
            <button
              className=" absolute right-6 top-6 z-10  text-white hover:text-neutral-200 active:scale-90 sm:right-8  sm:top-8 "
              onClick={() => setSpeakerOn((x) => !x)}
            >
              {speakerOn ? (
                <IoMdVolumeHigh className="h-5 w-5 sm:h-[34px] sm:w-[34px]" />
              ) : (
                <IoMdVolumeOff className="h-5 w-5 sm:h-[34px] sm:w-[34px]" />
              )}
            </button>
            <span className="   text whitespace-nowrap  font-lato text-2xl font-bold tracking-[0.02em] text-white sm:text-3xl lg:text-[38px]">
              9 + 6 + 7x - 2x - 3
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-around font-inter text-[24px] md:w-3/4 lg:w-[60%]">
          <button
            ref={redoButton}
            onClick={() => {
              r += 360;
              if (redoButton.current) {
                redoButton.current.style.transform = "rotate(" + r + "deg)";
              }
            }}
            className="cursor-pointer duration-700 "
          >
            <img
              className=" h-5  w-5  sm:h-[30px] sm:w-[30px]"
              src="/rewind.svg"
            />
          </button>
          <div className="flex w-[40%] flex-row items-center justify-between ">
            <img
              className=" h-9 w-9 cursor-pointer  object-contain duration-300 hover:-translate-x-1.5 active:scale-[.85] sm:h-[60px] sm:w-[60px]"
              src="/chevronleftcircle.svg"
            />
            <b className="text-base sm:text-2xl">01/10</b>
            <img
              className=" h-9  w-9 cursor-pointer object-contain duration-300 hover:translate-x-1.5 active:scale-[.80] sm:h-[60px] sm:w-[60px]"
              src="/chevronrightcircle.svg"
            />
          </div>
          <img
            className=" h-5 w-5  cursor-pointer duration-200  active:scale-75 sm:h-[30px] sm:w-[30px]"
            src="/fullscreen.svg"
          />
        </div>
      </div>
      <div className="  flex w-full flex-col-reverse items-center justify-between gap-4 sm:my-5 sm:flex-row sm:gap-0 ">
        <div className=" flex  -translate-x-5  scale-75 items-center  justify-start font-inter   text-[12.4px] text-dimgray sm:scale-100">
          <img
            className=" h-[120.7px]  w-[100.7px] object-cover"
            alt=""
            src="/logo-footer.png"
          />
          <div className="flex flex-col items-start justify-center gap-[10.6px]">
            <b className="">Published by</b>
            <img
              className=" h-[34.5px] w-[115.1px] object-cover"
              alt=""
              src="/hyggex.svg"
            />
          </div>
        </div>
        <div className=" group flex scale-75 cursor-pointer flex-row  items-center gap-[8px] font-inter text-[28px]  duration-150 active:scale-90 sm:scale-100">
          <img
            className=" h-[60px] w-[60px] shrink-0 overflow-hidden duration-300 group-hover:-rotate-180"
            alt=""
            src="/plus-icon.svg"
          />
          <div className=" bg-gradient-to-t  from-darkslateblue-100 to-darkslateblue-200 !bg-clip-text  font-semibold  text-transparent [-webkit-background-clip:text]  ">
            Create Flashcard
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
