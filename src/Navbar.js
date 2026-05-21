import { useState } from "react";
import { Link } from "react-scroll";
import logo from "./assets/Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 dark:bg-blue-900 text-white shadow-md fixed w-full z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-18 items-center">

          {/* LOGO */}
          <Link to="home" smooth={true} duration={500}>

            <div className="flex items-center gap-3 cursor-pointer">

              <img
                src={logo}
                alt="SW Tech Solutions Logo"
                className="w-16 h-16 object-contain"
              />

              <h1
                className="
                  text-xl
                  md:text-2xl
                  font-bold
                  bg-gradient-to-r
                  from-cyan-300
                  to-white
                  text-transparent
                  bg-clip-text
                "
              >
                SW Tech Solutions
              </h1>

            </div>

          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-6">

            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-200 transition"
            >
              Home
            </Link>

            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-200 transition"
            >
              About
            </Link>

            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-200 transition"
            >
              Projects
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-200 transition"
            >
              Contact
            </Link>

          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >

              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >

                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}

              </svg>

            </button>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (

        <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-700 dark:bg-blue-950">

          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block cursor-pointer hover:text-gray-200 transition"
          >
            Home
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block cursor-pointer hover:text-gray-200 transition"
          >
            About
          </Link>

          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block cursor-pointer hover:text-gray-200 transition"
          >
            Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block cursor-pointer hover:text-gray-200 transition"
          >
            Contact
          </Link>

        </div>

      )}

    </nav>
  );
}

export default Navbar;