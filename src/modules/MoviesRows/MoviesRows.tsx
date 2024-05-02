import React from "react";
import MovieRow from "../MovieRow/MovieRow";
import { movieURLAddress } from "../../shared/MovieApiKeys/MovieGenres";

const MoviesRows = () => {
  return (
    <div>
      <MovieRow
        grid={false}
        title="Top 10 Today"
        movieApiUrl={movieURLAddress.TvPopular}
      ></MovieRow>
      <MovieRow
        grid={false}
        title="Family Animation"
        movieApiUrl={movieURLAddress.AnimationMovies}
      ></MovieRow>
    </div>
  );
};

export default MoviesRows;
