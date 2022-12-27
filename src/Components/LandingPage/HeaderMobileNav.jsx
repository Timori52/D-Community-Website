import React from "react";

import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { loginDropdownOptions } from "../../data/LoginDropdownOptions";
import { socialLinks } from "../../data/Links";

const HeaderMobileNav = (props) => {
  const {
    onLogOut,
    onIsLoggedIn,
    onIsMenuActive,
    onSetIsMenuActive,
    onShowLoginMenu,
    onSetShowLoginMenu,
    onSetActiveSection,
  } = props;

  return (
    <>
      <ul className="flex justify-center items-center">
        <li>
          {!onIsLoggedIn && (
            <div className="relative inline-block text-left pr-2">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center items-center rounded-sm px-4 py-2 text-sm font-medium shadow-sm hover:bg-lightBlue focus:outline-none focus:ring-[1px] focus:ring-customBlue"
                  onClick={() => {
                    onSetShowLoginMenu(!onShowLoginMenu);
                  }}
                >
                  Log-in
                  {onShowLoginMenu === true ? (
                    <IoMdArrowDropup className="ml-2" />
                  ) : (
                    <IoMdArrowDropdown className="ml-2" />
                  )}
                </button>
              </div>

              {onShowLoginMenu && (
                <div className="absolute right-8 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="shadow-xl">
                    {loginDropdownOptions.map((option) => (
                      <Link
                        key={option.id}
                        to={option.path}
                        className="block text-sm hover:bg-lightBlue text-start"
                        onClick={() => {
                          onSetShowLoginMenu(false);
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
          )}
        </li>
        <li
          className="flex flex-col justify-center items-end gap-[6px] cursor-pointer ml-6"
          onClick={() => {
            onSetIsMenuActive(!onIsMenuActive);
          }}
        >
          <div className="w-6 h-[2px] bg-black"></div>
          <div className="w-6 h-[2px] bg-black"></div>
          <div className="w-6 h-[2px] bg-black"></div>
        </li>
      </ul>

      {onIsMenuActive && (
        <ul className="absolute px-6 py-2 top-0 left-0 w-[80vw] h-screen bg-white rounded-md border-2 flex flex-col justify-start items-start  text-base text-start font-semibold">
          <li className="w-full flex justify-end items-center">
            <IoIosClose
              className="text-4xl cursor-pointer mb-10"
              onClick={() => {
                onSetIsMenuActive(!onIsMenuActive);
              }}
            />
          </li>

          <li
            className="cursor-pointer hover:bg-blue-200 w-full px-4 py-4 border-b-[1px]"
            onClick={() => {
              onSetIsMenuActive(false);
            }}
          >
            <a
              href="#home"
              onClick={() => onSetActiveSection("#home")}
              className="w-full inline-block"
            >
              Home
            </a>
          </li>
          <li
            className="cursor-pointer hover:bg-blue-200 w-full px-4 py-4 border-b-[1px]"
            onClick={() => {
              onSetIsMenuActive(false);
            }}
          >
            <a
              href="#works"
              onClick={() => onSetActiveSection("#works")}
              className="w-full inline-block"
            >
              How it work's
            </a>
          </li>
          <li
            className="cursor-pointer hover:bg-blue-200 w-full px-4 py-4 border-b-[1px]"
            onClick={() => {
              onSetIsMenuActive(false);
            }}
          >
            <a
              href="#about"
              onClick={() => onSetActiveSection("#about")}
              className="w-full inline-block"
            >
              About Us
            </a>
          </li>
          <li
            className="cursor-pointer hover:bg-blue-200 w-full px-4 py-4 border-b-[1px]"
            onClick={() => {
              onSetIsMenuActive(false);
            }}
          >
            <a
              href="#faqs"
              onClick={() => onSetActiveSection("#faqs")}
              className="w-full inline-block"
            >
              FAQ's
            </a>
          </li>

          {onIsLoggedIn && (
            <li
              className="cursor-pointer hover:bg-blue-200 w-full px-4 py-3 text-red-500 border-b-[1px]"
              onClick={onLogOut}
            >
              Logout
            </li>
          )}
          <ul className="mt-auto mb-10 mx-auto">
            <li className="flex justify-center items-center gap-3">
              {socialLinks.map((socialLink) => (
                <Link
                  to={socialLink.url}
                  key={socialLink.id}
                  className="text-black text-base"
                >
                  {socialLink.image}
                </Link>
              ))}
            </li>
          </ul>
        </ul>
      )}
    </>
  );
};

export default HeaderMobileNav;
