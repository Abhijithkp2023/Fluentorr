import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header role="banner">
    <nav role="navigation" className="bg-blue-100 flex shadow-md justify-between items-center w-full px-4 mx-auto py-7 z-50">
      <div>
        <img className="w-16" src="/fluentorr.svg" alt="Fluentorr logo" />
      </div>
      <div
        className={`md:static absolute bg-blue-100 md:min-h-fit min-h-[20vh] right-0 ${
          menuOpen ? "top-[8%]" : "top-[-100%]"
        } md:w-auto w-full flex justify-center mt-5 z-40`}
      >
        <ul className="flex md:flex-row flex-col md:items-center items-center md:gap-[4vw] gap-8 justify-center">
          <li>
            <a className="hover:text-gray-700 hover:underline" href="#" aria-label="Home">
              Home
            </a>
          </li>
          <li>
            <a className="text-base hover:text-gray-700 hover:underline" href="#" aria-label="About">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-gray-700 hover:underline" href="#" aria-label="Contact us">
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <button aria-label="Get started" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
        {menuOpen === false ? (
          <MdMenu
            name="menu"
            onClick={onToggleMenu}
            className="text-3xl md:hidden cursor-pointer"
            aria-label="open menu"
          />
        ) : (
          <MdOutlineClose
            onClick={onToggleMenu}
            className="text-3xl md:hidden cursor-pointer"
            aria-label="close menu"
          />
        )}
      </div>
    </nav>
    </header>
  );
};

export default Header;
