import React from "react";
import SearchResultMovie from "./SearchResultMovie";
import PropTypes from "prop-types";

import { SearchDiv } from "../../App.styles";


const AllMovieResults = ({ movies }) => {

  console.log(movies)

  return (
    <SearchDiv className="row">
      {movies.results.map(movie => (
       
       <SearchResultMovie movieData={movie}/>

      ))}
    </SearchDiv>
  );
};

AllMovieResults.propTypes = {
  books: PropTypes.array,
  expandBook: PropTypes.func
};

export default AllMovieResults;
