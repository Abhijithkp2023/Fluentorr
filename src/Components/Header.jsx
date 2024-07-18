import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onCloseMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header role="banner" className="w-full shadow-md z-20 ">
    <nav role="navigation" className="bg-blue-100 flex justify-between items-center px-4 py-7">
      <div>
        <img className="w-16" src="/fluentorr.svg" alt="Fluentorr logo" />
      </div>
      <div
        className={`md:static absolute z-50 bg-blue-100 md:min-h-fit min-h-[20vh] right-0 ${
          menuOpen ? "top-[8%]" : "top-[-100%]"
        } md:w-auto w-full flex justify-center mt-6 md:pb-0 pb-5`}
      >
        <ul className="flex md:flex-row flex-col md:items-center items-center md:gap-[4vw] gap-8 justify-center">
          <li className="font-">
            <Link className="hover:text-gray-700 hover:underline" onClick={onCloseMenu} to="/" aria-label="Home">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-base hover:text-gray-700 hover:underline" onClick={onCloseMenu} to="/about" aria-label="About">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-700 hover:underline" onClick={onCloseMenu} to="/courses" aria-label="Contact us">
              Courses
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-700 hover:underline" onClick={onCloseMenu} to="/blogs" aria-label="Contact us">
              Blogs
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-700 hover:underline" onClick={onCloseMenu} to="/epttest" aria-label="Ept test page">
              EPT Test
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <button aria-label="Get started" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enquire Now
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
