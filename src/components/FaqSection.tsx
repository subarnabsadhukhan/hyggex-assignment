import { Disclosure, Transition } from "@headlessui/react";
import { FunctionComponent } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const FAQ_DATA = [
  {
    q: "Can education flashcards be used for all age groups?",
    a: "Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.",
  },
  {
    q: "How do education flashcards work?",
    a: "Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.",
  },
  {
    q: "Can education flashcards be used for test preparation?",
    a: "Absolutely, Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const FaqSection: FunctionComponent = () => {
  return (
    <div className="my-10  mb-40 flex w-full flex-col items-start gap-10">
      <h2 className=" bg-gradient-to-t from-darkslateblue-100 to-darkslateblue-200 !bg-clip-text font-inter text-3xl font-bold tracking-[0.01em] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] sm:mt-10 sm:text-[48px] ">
        FAQ
      </h2>
      <div className=" flex w-full flex-col items-start gap-4 md:gap-8">
        {FAQ_DATA.map((faq) => (
          <Disclosure as="div" key={faq.q} className=" w-full lg:w-2/3  ">
            {({ open }) => (
              <div className="rounded-xl   border-[1.6px] border-darkslateblue-100 px-4 py-3 sm:px-6 sm:py-4">
                <Disclosure.Button className=" flex w-full  items-start justify-between overflow-hidden ">
                  <span className=" text-left font-inter text-[16px] font-semibold leading-[26px] text-gray ">
                    {faq.q}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <HiOutlineChevronDown
                      className={classNames(
                        open ? "-rotate-180" : "rotate-0",
                        "h-6 w-6 transform  ",
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </Disclosure.Button>
                <Transition
                  enter=" transition  duration-100"
                  enterFrom="transform scale-0"
                  enterTo="transform scale-100 "
                  leave="transition duration-100 ease-out"
                  leaveFrom=" scale-100 opacity-100"
                  leaveTo=" scale-95 opacity-0"
                >
                  <Disclosure.Panel as="div" className="mt-2 pr-12  ">
                    <p className=" text-gray-500 text-justify   text-base">
                      {faq.a}
                    </p>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
