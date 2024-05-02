import React from "react";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import MovieRow from "../MovieRow/MovieRow";
import { movieURLAddress } from "../../shared/MovieApiKeys/MovieGenres";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

const GridMovies = () => {
  const isTablet = useMediaQuery("(max-width: 1000px)");
  const isMobile = useMediaQuery("(max-width: 800px)");
  return (
    <WrapperContainer singlePage={false}>
      <div>
        <h3
          className={
            isTablet
              ? "text-white font-sans font-black text-2xl leading-10 pt-4"
              : isMobile
              ? "text-white font-sans font-black text-1xl leading-10 pt-4"
              : "text-white font-sans font-black text-3xl leading-10 pt-4"
          }
        >
          Today's top list
        </h3>
      </div>
      <MovieRow
        grid={true}
        title="Top 10 Today"
        movieApiUrl={movieURLAddress.TvTopRated}
      ></MovieRow>
    </WrapperContainer>
  );
};

export default GridMovies;
