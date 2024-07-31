import { useState } from "react";
import { MdMenu, MdOutlineClose, MdHome, MdInfo, MdSchool, MdArticle, MdAssessment } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header role="banner" className="w-full z-20">
      <nav role="navigation" className="bg-blue-50 pt-8 md:py-10 flex justify-between items-center pr-[5%] pl-[5%]">
        <div className="flex items-center">
          <img className="w-36 md:w-44 lg:w-52 h-auto" src="/flu.png" alt="fluentorr logo" />
        </div>
        <div
          className={`md:static absolute z-40 md:min-h-fit min-h-[20vh] right-0 ${
            menuOpen ? "top-[8%]" : "top-[-100%]"
          } md:w-auto w-full flex md:justify-end justify-center md:pb-0 pb-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center items-center md:gap-[4vw] gap-6 justify-center bg-blue-50 w-full mt-4 pb-4 md:w-auto">
            <li className="flex items-center text-sm md:text-base text-fontColor font-semibold hover:text-gradient-blue">
              <MdHome className="mr-2" />
              <Link className="hover:text-gray-700 hover:underline" onClick={onCloseMenu} to="/" aria-label="home">
                Home
              </Link>
            </li>
            <li className="flex items-center text-sm md:text-base text-fontColor font-semibold hover:text-gradient-blue">
              <MdInfo className="mr-2" />
              <Link className="hover:text-gray-700 hover:underline" onClick={onCloseMenu} to="/about" aria-label="about">
                About
              </Link>
            </li>
            <li className="flex items-center text-sm md:text-base text-fontColor font-semibold hover:text-gradient-blue">
              <MdSchool className="mr-2" />
              <Link className="hover:text-gray-700 hover:underline" onClick={onCloseMenu} to="/courses" aria-label="courses">
                Trainings
              </Link>
            </li>
            <li className="flex items-center text-sm md:text-base text-fontColor font-semibold hover:text-gradient-blue">
              <MdArticle className="mr-2" />
              <Link className="hover:text-gray-700 hover:underline" onClick={onCloseMenu} to="/blogs" aria-label="blogs">
                Blogs
              </Link>
            </li>
            <li className="flex hover:scale-105 items-center text-sm bg-blue-800 sm:text-base text-white p-1 rounded-md font-semibold">
              <MdAssessment className="mr-2" />
              <Link className="" onClick={onCloseMenu} to="/epttest" aria-label="ept est">
                EPT Test
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          {menuOpen === false ? (
            <MdMenu
              name="menu"
              onClick={onToggleMenu}
              className="text-3xl cursor-pointer"
              aria-label="open menu"
            />
          ) : (
            <MdOutlineClose
              onClick={onToggleMenu}
              className="text-3xl cursor-pointer z-50"
              aria-label="close menu"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
