import { FunctionComponent } from "react";

const pages = [
  { name: "Flashcard", href: "#", current: false },
  { name: "Mathematics", href: "#", current: false },
  { name: "Relation and Function", href: "#", current: true },
];
const Breadcrumb: FunctionComponent = () => {
  return (
    <nav className="my-10 flex" aria-label="Breadcrumb">
      <ol
        role="list"
        className="flex   justify-start space-x-1 sm:items-center"
      >
        <li>
          <div>
            <a href="#">
              <img
                src="/home-icon.svg"
                className="  w-7 hover:scale-105 md:w-[30px]"
                aria-hidden="true"
              />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        <div className="flex flex-wrap ">
          {pages.map((page) => (
            <li key={page.name}>
              <div className="flex items-center justify-center">
                <img
                  src="/ChevronRightIcon.svg"
                  className=" h-6"
                  aria-hidden="true"
                />
                <a
                  href={page.href}
                  className={`whitespace-nowrap text-center   font-inter  text-base sm:text-lg ${page.current ? "font-semibold text-darkslateblue-200" : "font-medium text-dimgray"}    hover:underline-offset-3   hover:underline`}
                >
                  {page.name}
                </a>
              </div>
            </li>
          ))}
        </div>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
