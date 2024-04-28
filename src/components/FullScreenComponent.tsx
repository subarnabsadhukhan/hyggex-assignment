import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
import { MdOutlineLightbulb } from "react-icons/md";

interface FullScreenComponentProps {
  speakerOn: boolean;
  setSpeakerOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const FullScreenComponent = ({
  speakerOn,
  setSpeakerOn,
}: FullScreenComponentProps) => {
  return (
    <div className="relative flex h-screen  w-screen  flex-col items-center  justify-center">
      <div
        className={` relative  flex  aspect-video  w-screen items-center  justify-center   bg-gradient-to-tr from-[#1F80EB] from-10% via-[#2284F1] via-20% to-[#051A91] to-95%  `}
      >
        <button className="absolute left-6 top-6 z-10  text-white hover:text-neutral-200 active:scale-90 sm:left-14  sm:top-14 ">
          <MdOutlineLightbulb className="h-5 w-5 sm:h-[48px] sm:w-[48px]" />
        </button>
        <button
          className=" absolute right-6 top-6 z-10  text-white hover:text-neutral-200 active:scale-90 sm:right-14  sm:top-14 "
          onClick={() => setSpeakerOn((x) => !x)}
        >
          {speakerOn ? (
            <IoMdVolumeHigh className="h-5 w-5 sm:h-[48px] sm:w-[48px]" />
          ) : (
            <IoMdVolumeOff className="h-5 w-5 sm:h-[48px] sm:w-[48px]" />
          )}
        </button>
        <span className="   text whitespace-nowrap  font-lato text-2xl font-bold tracking-[0.02em] text-white sm:text-3xl lg:text-[58px]">
          9 + 6 + 7x - 2x - 3
        </span>
        <div className=" shadow-solid absolute bottom-0 flex h-[10%]  w-full items-center justify-around  bg-[rgba(0,0,0,0.6)] font-inter text-[24px] shadow-lg   ">
          <div className="z-30 flex w-[40%] flex-row items-center justify-between  text-white  ">
            <HiChevronLeft className="h-9 w-9 cursor-pointer  object-contain duration-300 hover:-translate-x-1.5 active:scale-[.85] sm:h-[60px] sm:w-[80px]" />
            <b className="text-base sm:text-4xl">01/10</b>
            <HiChevronRight className="h-9 w-9 cursor-pointer  object-contain duration-300 hover:-translate-x-1.5 active:scale-[.85] sm:h-[60px] sm:w-[80px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenComponent;
