import React, { useContext } from "react";
import logo from "../../assets/images/logo.png";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import { NavLink, Link } from "react-router-dom";
import FavoriteMovies from "../FavoriteMovies/FavoriteMovies";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";
import { GlobalMovieContext } from "../../shared/GlobalContext/GlobalContext";
import Search from "./Search";

const Navbar = () => {
  let activeStyle = {
    color: "#3A68DE",
  };
  const isDesktop = useMediaQuery("(max-width: 1024px)");
  const { sectionTop } = useContext<any>(GlobalMovieContext);
  return (
    <div>
      {isDesktop ? (
        <WrapperContainer singlePage={false}>
          <div
            ref={sectionTop}
            className="sticky flex justify-between ml-4 top-0 left-0 bg-background-dark w-full h-14 items-center z-[100]"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6 text-base "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <div>
              <Link to="/">
                <img
                  className={isDesktop ? "h-4" : "h-5"}
                  src={logo}
                  alt="logo"
                  style={{height: "2.8rem"}}
                ></img>
              </Link>
            </div>
            <div className="flex items-center mr-4">
              <FavoriteMovies></FavoriteMovies>
            </div>
          </div>
          <div className="flex pt-4 justify-start w-full items-center overflow-visible">
            <NavLink
              to="/discovery"
              className={
                isDesktop
                  ? "flex mr-2 font-sans text-xs whitespace-nowrap text-white h-full hover:text-[#3A68DE]"
                  : "flex mx-4 font-sans text-sm whitespace-nowrap text-white h-full hover:text-[#3A68DE]"
              }
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
            <NavLink
              to="/new"
              className="flex mr-2 font-sans text-sm whitespace-nowrap text-White h-full hover:text-[#3A68DE]"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              New
            </NavLink>
            <div className="flex items-center w-full h-12 z-10  ">
              <Search></Search>
            </div>
          </div>
        </WrapperContainer>
      ) : (
        <WrapperContainer singlePage={false}>
          <div className="flex pl-16 fixed top-0 left-0 ml-16 bg-background-dark w-full h-50 items-center z-[100]">
            <div>
              <Link to="/">
                <img
                  className={isDesktop ? "h-3" : "h-5"}
                  src={logo}
                  alt="logo"
                  style={{height: "2.8rem"}}
                ></img>
              </Link>
            </div>
            <div className="flex justify-end w-full items-center overflow-visible">
              <NavLink
                to="/discovery"
                className={
                  isDesktop
                    ? "flex mx-4 font-sans text-xs whitespace-nowrap text-white h-full hover:text-[#3A68DE]"
                    : "flex mx-4 font-sans text-sm whitespace-nowrap text-white h-full hover:text-[#3A68DE]"
                }
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
              <NavLink
                to="/new"
                className="flex mx-4 font-sans text-sm whitespace-nowrap text-white h-full hover:text-[#3A68DE]"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                New
              </NavLink>
              <FavoriteMovies></FavoriteMovies>
              <div className="flex z-[1] grow-[2] h-12 items-center mx-4">
                <div className="flex items-center w-full h-12 z-10 p-0 ">
                  <Search></Search>
                </div>
              </div>
              
              <div className="flex min-w-[92px] items-center cursor-pointer mr-32 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6 text-base ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </WrapperContainer>
      )}
    </div>
  );
};

export default Navbar;
