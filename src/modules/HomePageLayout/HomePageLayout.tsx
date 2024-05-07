import React from "react";
import homeHeader from "../../assets/images/homeHeader.png";
import Button from "../../shared/Button/Button";
import { Link } from "react-router-dom";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

const HomePageLayout = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  return (
    <div className="relative text-center bg-gradient-to-t from-[#060d17] via-[#5e6b76] to-[#5e6b76] ">
      <div className="relative text-center">
        <img
          className="h-screen w-full mix-blend-overlay"
          src={homeHeader}
          alt="homePage"
        ></img>
        <div className="absolute top-[30%] right-1/2 translate-x-2/4 ">
          <div>
            <p
              className={
                isMobile
                  ? "text-white font-sans font-black text-4xl w-[400px]"
                  : "text-white font-sans font-black text-6xl "
              }
            >
              Watch and update series and films every day only on ISerieX
            </p>
            <p
              className={
                isMobile
                  ? "font-sans text-sm font-normal  text-[#999c9f] leading-normal pt-8 w-[350px]"
                  : "font-sans text-xl font-normal whitespace-nowrap text-[#999c9f] leading-normal pt-8"
              }
            >
              ISerieX can help you find the best place to stream new, popular,
              and upcoming content.
            </p>
          </div>
          <div
            className={
              isMobile
                ? "flex flex-col items-center justify-center pt-8 w-full"
                : "flex items-center justify-center pt-8"
            }
          >
            <div>
              <Link to="/discovery">
                <Button
                  className={
                    isMobile
                      ? "text-white font-medium px-6 py-4	font-sans mr-4 text-base normal-case rounded-lg text-ellipsis bg-[#3A68DE] overflow-hidden"
                      : "text-white font-medium px-16 py-4	font-sans mr-4 text-base normal-case rounded-lg text-ellipsis bg-[#3A68DE] overflow-hidden"
                  }
                >
                  Discover movies and series
                </Button>
              </Link>
            </div>
            <div>
              <Button
                color="gray"
                className={
                  isMobile
                    ? "text-white font-medium px-6 py-4 mt-4 font-sans text-base normal-case rounded-lg text-ellipsis bg-transparent overflow-hidden"
                    : "text-white font-medium px-8 py-4  font-sans text-base normal-case rounded-lg text-ellipsis bg-transparent overflow-hidden"
                }
              >
                Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageLayout;
