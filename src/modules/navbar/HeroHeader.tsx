import React from "react";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import { useLocation } from "react-router-dom";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

const HeroHeader = () => {
  let { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width: 8000px)");
  const isTablet = useMediaQuery("(max-width: 1000px)");

  return (
    <div>
      <WrapperContainer singlePage={false}>
        {pathname === "/discovery" && (
          <div
            className={
              isMobile
                ? "flex w-full justify-between items-center pt-2"
                : "flex w-full justify-between items-center pt-12"
            }
          >
            <div className="flex items-center pt-20">
              <p
                className={
                  isMobile
                    ? "text-white font-sans font-black text-lg leading-10 "
                      ? isTablet
                        ? "text-white font-sans font-black text-lg leading-10 "
                        : "text-white font-sans font-black text-4xl leading-10"
                      : "text-white font-sans font-black text-4xl leading-10 "
                    : "text-white font-sans font-black text-4xl leading-10"
                }
              >
                Discover daily
              </p>
            </div>            
          </div>
        )}
        {pathname === "/new" && (
          <div className="pt-8">
            <h1 className="text-white font-sans font-semibold text-4xl leading-10 py-2">
              Unlimited movies, TV shows, and more
            </h1>
            <p
              className={
                isMobile
                  ? "text-[#b9bdcc] font-sans text-lg font-medium"
                  : " text-[#b9bdcc] font-sans text-3lg font-medium"
              }
            >
              Streaming service that offers a wide variety of award-winning TV
              shows, movies, anime, documentaries, and more on thousands of
              internet-connected devices.
            </p>
            <p
              className={
                isMobile
                  ? "text-[#b9bdcc] font-sans text-lg font-medium"
                  : " text-[#b9bdcc] font-sans text-3lg font-medium"
              }
            >
              You can watch as much as you want, whenever you want without a
              single commercial – all for one low monthly price. There's always
              something new to discover and new TV shows and movies are added
              every week!
            </p>
           
          </div>
        )}
      </WrapperContainer>
    </div>
  );
};

export default HeroHeader;
