import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { authenticationSliceActions } from "../../Store/AuthenticationSlice";

import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { loginDropdownOptions } from "../../data/LoginDropdownOptions";

import Logo from "../../assets/Logo.png";
import HeaderMobileNav from "./HeaderMobileNav";

const MainHeader = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const [navScrollFix, setNavScrollFix] = useState(false);
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const closeLoginDropDown = (e) => {
      if (e.path[0].tagName !== "BUTTON") {
        setShowLoginMenu(false);
      }
    };

    document.addEventListener("click", closeLoginDropDown);

    return () => document.body.removeEventListener("click", closeLoginDropDown);
  }, []);

  if (isMenuActive) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  function logOutHandler() {
    dispatch(authenticationSliceActions.logOut());
    navigate("/");
  }

  function navbarFix() {
    if (window.scrollY >= 800) {
      setNavScrollFix(true);
    } else {
      setNavScrollFix(false);
    }
  }

  window.addEventListener("scroll", navbarFix);

  return (
    <>
      <header
        className={`fixed z-30 ${
          navScrollFix === true ? "bg-white" : "bg-heroBg"
        } w-screen flex justify-between items-center min-h-[8%] max-h-[8%] border-8 py-2 px-[8%] transition-all duration-150`}
      >
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-10" />
        </Link>

        {/* nav for desktop */}

        <nav className="hidden md:flex">
          <ul className="flex justify-center items-center gap-6">
            <li>
              <a
                href="#home"
                onClick={() => setActiveSection("#home")}
                className={`${
                  activeSection === "#home" && "border-b-2 border-customBlue"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#works"
                onClick={() => setActiveSection("#works")}
                className={`${
                  activeSection === "#works" && "border-b-2 border-customBlue"
                }`}
              >
                How it work's
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setActiveSection("#about")}
                className={`${
                  activeSection === "#about" && "border-b-2 border-customBlue"
                }`}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                onClick={() => setActiveSection("#faqs")}
                className={`${
                  activeSection === "#faqs" && "border-b-2 border-customBlue"
                }`}
              >
                FAQ's
              </a>
            </li>

            <li>
              {!isLoggedIn ? (
                <div className="relative inline-block text-left pr-2">
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center items-center rounded-sm px-4 py-1 text-sm font-medium shadow-sm hover:bg-lightBlue focus:outline-none focus:ring-[1px] focus:ring-customBlue"
                      onClick={() => {
                        setShowLoginMenu((prevState) => !prevState);
                      }}
                    >
                      Log-in
                      {showLoginMenu === true ? (
                        <IoMdArrowDropup className="ml-2" />
                      ) : (
                        <IoMdArrowDropdown className="ml-2" />
                      )}
                    </button>
                  </div>

                  {showLoginMenu && (
                    <div className="absolute right-8 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="shadow-xl">
                        {loginDropdownOptions.map((option) => (
                          <Link
                            key={option.id}
                            to={option.path}
                            className="block text-sm hover:bg-lightBlue text-start"
                            onClick={() => {
                              setShowLoginMenu(false);
                            }}
                          >
                            <div className="w-full px-4 py-2 mb-2">
                              <h2 className="font-semibold text-base mb-1">
                                {option.name}
                              </h2>
                              <p>{option.description}</p>
                            </div>
                            <hr />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  type="button"
                  onClick={logOutHandler}
                  className="rounded-sm px-4 py-2 text-sm font-medium shadow-sm hover:bg-lightBlue focus:outline-none focus:ring-[1px] focus:ring-customBlue"
                >
                  Log-out
                </button>
              )}
            </li>
            <li>
              <button className="font-semibold text-sm bg-customBlue text-white px-4 py-2 rounded-sm ml-2">
                Get Started
                <img
                  src={require("../../assets/getStarted.png")}
                  alt="yellowLine"
                  className="w-full"
                />
              </button>
            </li>
          </ul>
        </nav>

        {/* nav for mobile */}
        <nav className="flex md:hidden">
          <HeaderMobileNav
            onLogOut={logOutHandler}
            onIsLoggedIn={isLoggedIn}
            onIsMenuActive={isMenuActive}
            onSetIsMenuActive={setIsMenuActive}
            onShowLoginMenu={showLoginMenu}
            onSetShowLoginMenu={setShowLoginMenu}
            onSetActiveSection={setActiveSection}
          />
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
