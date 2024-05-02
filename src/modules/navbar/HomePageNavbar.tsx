import React from "react";
import logo from "../../assets/images/logo.png";
import Search from "./Search";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import FavoriteMovies from "../FavoriteMovies/FavoriteMovies";
import { NavLink } from "react-router-dom";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

const HomePageNavbar = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  return (
    <div className="fixed flex justify-between bg-transparent w-full h-14 items-center z-[100] ">
      <WrapperContainer singlePage={false}>
        {!isMobile ? (
          <div className="flex justify-between items-center pt-8">
            <div>
              <img style={{width: "180px"}} src={logo} alt="logo"></img>
            </div>
            <div className="flex items-center">
              <NavLink to="/new">
                <p className="flex mx-4 font-sans text-lr whitespace-nowrap text-white h-full cursor-pointer hover:text-[#3A68DE]">
                  New
                </p>
              </NavLink>
              <div>
                <FavoriteMovies></FavoriteMovies>
              </div>
              <div className="w-96">
                <Search></Search>
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-14">
            <div className="flex justify-between items-center ">
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
                <img style={{width: "100px"}} className="h-4" src={logo} alt="logo"></img>
              </div>
            </div>
            <div className="flex items-center pt-4">
              <NavLink to="/new">
                <p className="flex  font-sans text-sm whitespace-nowrap text-white h-full cursor-pointer hover:text-white">
                  New
                </p>
              </NavLink>
              <div>
                <FavoriteMovies></FavoriteMovies>
              </div>
              <div className="w-full">
                <Search></Search>
              </div>
            </div>
          </div>
        )}
      </WrapperContainer>
    </div>
  );
};

export default HomePageNavbar;
