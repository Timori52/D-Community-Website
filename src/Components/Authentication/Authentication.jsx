import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { authenticationSliceActions } from "../../Store/AuthenticationSlice";
import { userTypeSliceActions } from "../../Store/UserTypeSlice";

import Google from "../../assets/LoginIcon/icons/google.svg";
import Github from "../../assets/LoginIcon/icons/github.svg";
import Twitter from "../../assets/LoginIcon/icons/twitter.svg";
import Facebook from "../../assets/LoginIcon/icons/facebook.svg";
import Logo from "../../assets/Logo.png";
import OpenEye from "../../assets/open-eye.svg";
import CloseEye from "../../assets/close-eye.svg";

const Authentication = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    mobileNo: "",
    otp: "",
  });

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);
  const [passwordType, setPasswordType] = useState(false);
  const [otpSignIn, setOtpSignIn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function inputChangeHandler(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  function submitHandler(e) {
    e.preventDefault();
    let url;
    setIsLoading(true);

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDs8ZnbOntyVpA64aqHE7F2gG2QTSgtoxc";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDs8ZnbOntyVpA64aqHE7F2gG2QTSgtoxc";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setIsLoading(false);
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            let errorMessage = "Authentication Failed !!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        dispatch(authenticationSliceActions.logIn(data.idToken));
        if (props.forPage === "developer") {
          navigate("/developer/home");
          dispatch(userTypeSliceActions.defineUserType("developer"));
        } else if (props.forPage === "client") {
          navigate("/client/home");
          dispatch(userTypeSliceActions.defineUserType("client"));
        } else if (props.forPage === "vendor") {
          navigate("/vendor/home");
          dispatch(userTypeSliceActions.defineUserType("vendor"));
        } else if (props.forPage === "admin") {
          navigate("/admin/home");
          dispatch(userTypeSliceActions.defineUserType("admin"));
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  let logInText;
  if (props.forPage === "developer") {
    logInText = "Get a Job in top Company's";
  } else if (props.forPage === "client") {
    logInText = "Hire highly skilled developers for your company";
  } else if (props.forPage === "vendor") {
    logInText = "Find Job for your skilled Developers";
  } else if (props.forPage === "admin") {
    logInText = "Log in as a Admin";
  }

  const togglePassword = () => {
    setToggleIcon(!toggleIcon);
    setPasswordType(!passwordType);
  };

  // switch to email to otp
  const toggleSignIn = () => {
    setOtpSignIn(!otpSignIn);
  };

  // relative bg-heroBg hidden md:flex w-[65%] max-h-screen
  return (
    <section className="fixed top-0 left-0 auth flex h-screen w-screen">
      <div className="relative bg-heroBg lg:w-[65%] max-h-screen md:block md:w-2/4">
        <Link
          to="/"
          className="absolute top-[3%] left-6 flex gap-3 justify-start items-center w-screen"
        >
          <img src={Logo} alt="Logo" className="w-10" />
          <span className="text-2xl font-bold mt-1 text-gray-600">
            D-Community
          </span>
        </Link>
        <img
          src={require("../../assets/LoginIcon/login-hero.png")}
          alt=""
          className="lg:w-3/5 md:w-80 absolute left-1/4 md:bottom-[13rem]"
        />
        <img
          src={require("../../assets/LoginIcon/Tree.png")}
          alt=""
          className="lg:w-[4.4rem] md:w-9 absolute lg:bottom-[6rem] md:bottom-[8.4rem] left-16"
        />
        <img
          src={require("../../assets/LoginIcon/bottom-background.png")}
          alt=""
          className="w-screen md:h-80 lg:h-96 absolute bottom-0 right-0"
        />
      </div>

      {/* form */}
      <div className="my-auto p-10 lg:w-[35%] md:w-2/4 mx-auto bg-white h-screen flex justify-center items-center">
        <div className="w-full max-w-md  mx-auto">
          <div className="mb-3">
            <h2 className="font-bold text-2xl mb-2 text-gray-600">
              Welcome to D-Community! 👋🏻
            </h2>
            <p className="text-gray-400 mb-4">{logInText}</p>
          </div>

          <form
            onSubmit={submitHandler}
            className="w-full flex flex-col justify-center gap-6"
          >
            {otpSignIn ? (
              <div className="w-full flex flex-col justify-center gap-6">
                <div>
                  <input
                    type="number"
                    placeholder="Mobile No."
                    name="mobileNumber"
                    value={user.mobileNo}
                    onChange={inputChangeHandler}
                    className="border w-full p-3 rounded-md focus:outline-gray-400 focus:outline"
                  />
                </div>
                <div className="relative">
                  <input
                    type={passwordType ? "text" : "password"}
                    placeholder="Enter OTP"
                    name="otp"
                    value={user.otp}
                    onChange={inputChangeHandler}
                    className="border w-full p-3 rounded-md focus:outline-gray-400 focus:outline"
                  />
                  <span
                    className="absolute flex right-3 top-[1rem] cursor-pointer"
                    onClick={togglePassword}
                  >
                    {toggleIcon ? (
                      <img src={CloseEye} alt="" className="w-6" />
                    ) : (
                      <img src={OpenEye} alt="" className="w-6 " />
                    )}
                  </span>
                </div>
              </div>
            ) : (
              <div className="w-full flex flex-col justify-center gap-6">
                {/* Email and password */}
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={inputChangeHandler}
                    className="border w-full p-3 rounded-md focus:outline-gray-400 focus:outline"
                  />
                </div>

                <div className="relative">
                  <input
                    type={passwordType ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={inputChangeHandler}
                    className="border w-full p-3 rounded-md focus:outline-gray-400 focus:outline"
                  />
                  <span
                    className="absolute flex right-3 top-[1rem] cursor-pointer"
                    onClick={togglePassword}
                  >
                    {toggleIcon ? (
                      <img src={CloseEye} alt="" className="w-6" />
                    ) : (
                      <img src={OpenEye} alt="" className="w-6 " />
                    )}
                  </span>
                </div>
              </div>
            )}

            {isLogin && (
              <div>
                <p className="flex justify-between -mt-5 p-2">
                  <span
                    className="text-purple-500 cursor-pointer"
                    onClick={toggleSignIn}
                  >
                    {otpSignIn ? "Email SignIn" : "OTP SignIn"}
                  </span>
                  <span className="text-purple-500">
                    <Link to="/forgetPassword">Forgot Password?</Link>
                  </span>
                </p>
              </div>
            )}

            <div>
              {!isLoading ? (
                <button
                  type="submit"
                  className="w-full bg-purple-500 text-white p-3 rounded-md hover:brightness-110"
                >
                  {isLogin ? "Log In" : "Sign Up"}
                </button>
              ) : (
                <p className="text-center">Loading...</p>
              )}
              <button
                type="button"
                onClick={switchAuthModeHandler}
                className="w-full flex justify-center mt-8 text-purple-500"
              >
                {isLogin ? "Create an account" : "Login with existing account"}
              </button>
            </div>
          </form>

          <div className="flex justify-center items-center m-8">
            <span className="w-24 h-[1px] bg-[#3A35411F] mr-4"> </span>
            <span>or</span>
            <span className="w-24 h-[1px] bg-[#3A35411F] ml-4"></span>
          </div>

          <div className="flex justify-center items-center ">
            <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
              <img src={Facebook} alt="facebook" className="pr-4" />
            </a>
            <a href="https://www.twitter.com" rel="noreferrer" target="_blank">
              <img src={Twitter} alt="twitter" className="pr-4" />
            </a>
            <a href="https://www.github.com" rel="noreferrer" target="_blank">
              <img src={Github} alt="github" className="pr-4" />
            </a>
            <a href="https://mail.google.com" rel="noreferrer" target="_blank">
              <img src={Google} alt="google" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authentication;
