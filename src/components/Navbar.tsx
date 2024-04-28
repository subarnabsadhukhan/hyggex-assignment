/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { FunctionComponent } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Flashcard", href: "#" },
  { name: "Contact", href: "#" },
  { name: "FAQ", href: "#" },
];

const Navbar: FunctionComponent = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex h-24 justify-between gap-10">
            <div className="flex">
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="text-gray-400 hover:bg-gray-100 hover:text-gray-500 inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-darkslateblue-100">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiOutlineXMark
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <HiOutlineMenu
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-10 w-auto lg:hidden"
                  src="/logo.png"
                  alt="Hyggex Logo"
                />
                <img
                  className="hidden h-10 w-auto lg:block"
                  src="/logo-full.png"
                  alt="Hyggex Logo"
                />
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="hidden md:ml-6 md:flex md:space-x-5">
                {NAV_LINKS.map((link) => (
                  <a
                    href={link.href}
                    key={link.name}
                    className=" group px-1 pt-1  font-inter text-lg  text-darkslategray-100  duration-200 hover:text-darkslateblue-200  active:scale-90   "
                  >
                    {link.name}
                    <span className=" block h-[2.5px] max-w-0  rounded-full  bg-darkslateblue-100 transition-all  duration-500 ease-in-out group-hover:max-w-full "></span>
                  </a>
                ))}
              </div>
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="rounded-[32px]       bg-gradient-to-t  from-darkslateblue-100 to-darkslateblue-200   px-10 py-3 font-inter    text-lg font-medium text-white shadow-sm  hover:-translate-y-1   focus:outline-none  focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-90   "
                >
                  Login
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-3 pt-1">
              {NAV_LINKS.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-xl     bg-whitesmoke py-2 pl-3 text-base font-medium hover:bg-darkslateblue-50 hover:text-white sm:pl-5 "
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
