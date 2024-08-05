"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-full shadow-[#090979]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <div className="flex items-center sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-[#0300145e] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="flex-1 flex items-center justify-between sm:justify-center">
          <div className="flex items-center justify-between sm:w-[90%] h-full">
            <div className="hidden sm:flex items-center justify-end space-x-4 w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
              <a href="#home" className="cursor-pointer">
                Home
              </a>
              <a href="#about-us" className="cursor-pointer">
                About Us
              </a>
              <a href="#chapters" className="cursor-pointer">
                Chapters
              </a>
              <a href="#contact-us" className="cursor-pointer">
                Contact Us
              </a>
              <Menu as="div" className="relative">
                <div>
                  <Menu.Button className="cursor-pointer flex items-center">
                    Events
                    <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                </div>
                <Transition
                  as={React.Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#autoscaling"
                            className={`${
                              active ? "bg-indigo-600 text-white" : "text-gray-900"
                            } group flex rounded-md items-center px-2 py-2 text-sm`}
                          >
                            Autoscaling
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#usage-metrics"
                            className={`${
                              active ? "bg-indigo-600 text-white" : "text-gray-900"
                            } group flex rounded-md items-center px-2 py-2 text-sm`}
                          >
                            Usage Metrics
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="flex items-center sm:hidden">
              <Image src="/logo.png" alt="Logo" width={80} height={80} />
            </div>
          </div>
        </div>
      </div>
      <Transition
        show={mobileMenuOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="sm:hidden bg-[#0300145e] px-2 pt-2 pb-3 space-y-1 rounded-b-lg">
          <a
            href="#home"
            className="text-gray-300 hover:bg-[#0300145e] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#about-us"
            className="text-gray-300 hover:bg-[#0300145e] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About Us
          </a>
          <a
            href="#chapters"
            className="text-gray-300 hover:bg-[#0300145e] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Chapters
          </a>
          <a
            href="#contact-us"
            className="text-gray-300 hover:bg-[#0300145e] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Us
          </a>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
