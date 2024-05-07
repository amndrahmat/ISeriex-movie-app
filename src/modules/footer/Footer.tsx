import React, { useContext } from "react";
import Button from "../../shared/Button/Button";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";
import { GlobalMovieContext } from "../../shared/GlobalContext/GlobalContext";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const { handleScroll } = useContext<any>(GlobalMovieContext);
  const isDesktop = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 520px)");
  let { pathname } = useLocation();
  return (
    <div className={pathname !== "/" ? "bg-background-dark" : "bg-black"}>
      <div className="flex justify-center flex-col items-center p-5">
        <Link to="/">
          <img style={{ width: "280px" }} src={logo} alt="logo"></img>
        </Link>
        <p
          className={
            isDesktop
              ? "text-[#c6c8cd] font-sans text-md text-center leading-7 mb-4"
              : "text-[#c6c8cd] font-sans text-xl text-center leading-7 mb-4"
          }
        >
          Are you still looking for something to watch? Select one of these
          alternatives:
        </p>

        <div className="flex justify-center ">
          <Button className="text-white font-medium	font-sans mr-4 text-sm normal-case text-ellipsis bg-[#4c5a67] overflow-hidden hover:bg-[#3A68DE] duration-300">
            See what's new
          </Button>

          <Button className="text-white font-medium	font-sans mr-4 text-sm normal-case text-ellipsis bg-[#4c5a67] overflow-hidden hover:bg-[#3A68DE] duration-300">
            View and filter
          </Button>
        </div>
        <Button
          className={
            isMobile && pathname !== "/"
              ? "text-white font-medium	font-sans mr-4 text-sm normal-case border mt-4 border-orange-400 bg-transparent text-ellipsis overflow-hidden"
              : "hidden"
          }
          onClick={handleScroll}
        >
          Go to the top
        </Button>
      </div>
    </div>
  );
};

export default Footer;
