import React, { useContext } from "react";
import { GlobalMovieContext } from "../../shared/GlobalContext/GlobalContext";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import Button from "../../shared/Button/Button";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";
import { FaVoteYea } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import { MdOutlineHowToVote } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const MovieDetails = () => {
  const isMobile = useMediaQuery("(max-width: 830px)");
  const isDesktop = useMediaQuery("(max-width: 831px)");
  const { state, addToFavorites } = useContext<any>(GlobalMovieContext);
  const url = "https://image.tmdb.org/t/p/original/";

  const convertDate = (date: string) => {
    let year = date?.slice(0, 4);
    return `${year}`;
  };
  return (
    <div>
      <WrapperContainer singlePage={true}>
        <div
          className={
            isMobile
              ? "flex flex-col justify-center items-center"
              : "flex justify-center items-center w-full"
          }
        >
          <div
            className={
              isMobile
                ? "w-full flex justify-center items-center"
                : "flex flex-col h-full justify-center w-[700px] bg-background-dark "
            }
          >
            <div className="flex w-full justify-center items-center mx-auto">
              <div>
                <img
                  className={
                    isMobile
                      ? "h-screen w-full bg-background-dark bg-center bg-no-repeat bg-cover rounded-md "
                      : "h-screen w-[900px] bg-background-dark bg-center bg-no-repeat bg-cover rounded-md "
                      ? isDesktop
                        ? "h-screen w-[900px] bg-background-dark bg-center bg-no-repeat bg-cover rounded-md"
                        : ""
                      : ""
                  }
                  src={`${url}${
                    state?.movieDetails?.poster_path ||
                    state?.movieDetails?.backdrop_path
                  } `}
                  alt={state?.movieDetails?.title}
                ></img>
              </div>
            </div>
          </div>
          <div
            className={
              isMobile
                ? "flex w-full bg-background-dark border border-white rounded-t-md p-4"
                : "flex -translate-x-6 -translate-y-6 bg-background-dark border border-white rounded-t-md w-[900px] p-4"
            }
          >
            <div className="flex flex-col ">
              <img
                className={
                  isMobile
                    ? "w-full hidden"
                    : "h-full w-full bg-center bg-no-repeat bg-cover rounded-md "
                }
                src={`${url}${
                  state?.movieDetails?.poster_path ||
                  state?.movieDetails?.backdrop_path
                } `}
                alt={state?.movieDetails?.title}
              ></img>
            </div>
            <div className="pl-8 pb-8">
              <p className="text-[#3A69DF] font-sans font-medium text-m leading-4 uppercase">
                <span className="text-white font-sans font-medium text-m leading-4 uppercase">
                  {convertDate(
                    state.movieDetails.release_date || "-"
                  ).toString() || "-"}
                </span>
              </p>
              <h4 className="text-[#3A69DF] font-sans font-black text-4xl leading-10 pb-8 cursor-pointer hover:text-white">
                {state?.movieDetails?.title ||
                  state?.movieDetails?.original_title}
              </h4>
              <p className="text-[#3A69DF] font-sans font-medium text-m leading-4 uppercase">
                Language: <br></br>
                <Button
                  className={
                    "text-center w-20 font-sans text-lg text-white normal-case border border-white mt-1 rounded-lg p-2"
                  }
                >
                  {state.movieDetails.original_language.toUpperCase() || "-"}
                </Button>
              </p>
              <p className="text-[#3A69DF] font-sans font-medium text-m leading-4 uppercase pt-6">
                Overview:{" "}
              </p>
              <div className="pt-3">
                <p
                  className={
                    isMobile
                      ? "text-m w-full text-white font-sans font-normal pb-8"
                      : "text-white font-sans font-normal text-xl pb-8 w-[450px] max-w-[900px] "
                  }
                >
                  {state?.movieDetails?.overview}
                </p>
              </div>
              {state?.favorites?.map(
                (item: any) =>
                  item?.id === state?.movieDetails?.id && (
                    <div className="pb-8 " key={item.id}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#F28713"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </div>
                  )
              )}

              <div
                className={
                  isMobile
                    ? "flex flex-col justify-end items-start "
                    : " "
                    ? isDesktop
                      ? "flex flex-col items-center text-center w-full"
                      : ""
                    : ""
                }
              >
                <p
                  className={
                    isDesktop
                      ? "text-[#3A69DF] font-sans font-medium text-m leading-4 pb-8 pt-8 uppercase"
                      : "text-[#3A69DF] font-sans font-medium text-m leading-4 pb-8 pt-8 uppercase"
                  }
                  style={{
                    whiteSpace: "nowrap",
                    display: "ruby",
                  }}
                >
                  <MdOutlineHowToVote /> Vote Average{" "}
                  <span
                    className={
                      isMobile
                        ? "text-white font-sans font-medium text-m leading-4 pb-8 pt-8 uppercase pl-0"
                        : "text-white font-sans font-medium text-m leading-4 pb-8 pt-8 uppercase pl-4"
                    }
                  >
                    {state?.movieDetails?.vote_average}
                  </span>
                </p>
                <br></br>
                <p
                  className={
                    isDesktop
                      ? "text-[#3A69DF] font-sans font-medium text-m leading-4 pb-8 pt-8 uppercase"
                      : "text-[#3A69DF] font-sans font-medium text-m leading-4 pb-8 pt-8 uppercase"
                  }
                  style={{
                    whiteSpace: "nowrap",
                    display: "ruby",
                  }}
                >
                  <TiStarFullOutline /> popularity{" "}
                  <span
                    className={
                      isMobile
                        ? "text-white font-sans font-medium text-m leading-4 pb-8 pt-8 uppercase pl-0"
                        : "text-white font-sans font-medium text-m leading-4 pb-8 pt-8 uppercase pl-4"
                    }
                  >
                    {state?.movieDetails?.popularity}
                  </span>
                </p>
                <br></br>
                <p
                  className={
                    isDesktop
                      ? "text-[#3A69DF] font-sans font-medium text-m leading-4 pb-8 uppercase"
                      : "text-[#3A69DF] font-sans font-medium text-m leading-4 pb-8 uppercase"
                  }
                  style={{
                    whiteSpace: "nowrap",
                    display: "ruby",
                  }}
                >
                  <FaVoteYea /> Vote Count{" "}
                  <span
                    className={
                      isMobile
                        ? "text-white font-sans font-medium text-m leading-4 pb-8 uppercase pl-0"
                        : "text-white font-sans font-medium text-m leading-4 pb-8 uppercase pl-4"
                    }
                  >
                    {state?.movieDetails?.vote_count}
                  </span>
                </p>
                <br></br>
                <p
                  className={
                    isDesktop
                      ? "text-[#3A69DF] font-sans font-medium text-m leading-4 pb-8 uppercase"
                      : "text-[#3A69DF] font-sans font-medium text-m leading-4 pb-8 uppercase"
                  }
                  style={{
                    whiteSpace: "nowrap",
                    display: "ruby",
                  }}
                >
                  <IoPeople /> Age
                  <span
                    className={
                      isMobile
                        ? "text-white font-sans font-medium text-m leading-4 pb-8 uppercase pl-0"
                        : "text-white font-sans font-medium text-m leading-4 pb-8 uppercase pl-4"
                    }
                  >
                    {state?.movieDetails?.adult ? "18+" : "10+"}
                  </span>
                </p>
              </div>
              <br></br>
              <Button
                onClick={() => addToFavorites(state?.movieDetails)}
                className="flex items-center text-yellow-800 border border-yellow-800 text-lg normal-case outline-none"
              >
                <span>
                  <FaHeart />
                </span>{" "}
                Add to favorites
              </Button>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default MovieDetails;
