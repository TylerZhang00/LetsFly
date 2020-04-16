import React, { useState } from 'react';
import "./SearchMovie.css";
import PropTypes from "prop-types";

import AllMovieResults from "./AllMovieResults";



function SearchMovie (props) {
   

   const [title, setTitle] = useState("")
   const [movies, setMovies] = useState(null)
   const [fetchingData, setFetchingData] = useState(null)


  const sendRequest = (title) => {

    setTimeout(() => {


     const url = `https://api.themoviedb.org/3/search/movie?api_key=045667824413bb71ad2a7717041e8757&query=${title}
     `
    fetch(url)
    .then((response) => {
      
      return response.json();
    })
    .then((data) => {

      //limit the number of movies shown
      const shortData=data.results.slice(0, 6)
      setMovies(shortData)
      setFetchingData(false)
    });

    }, 1300);


  }

  const onTextChange = e => {
    setTitle(e.target.value);
    sendRequest(e.target.value)
  }


  // const handleSubmit = () => {
  //  }
  
       return (
           <div className="search">
                <div style={{margin:'auto'}} className="form-group row">
            <input
            style={{marginBottom:'2em'}}
              className="mr-1 col-sm-9 form-control"
              type="text"
              placeholder="Search Books By title, author, or ISBN..."
              name="searchText"
              onChange={onTextChange}
              value={title}
            />      
            </div>

                {/* <input className="button" type="submit" onClick={handleSubmit} value="Search"/> */}
          
          <div className="movie-div">
            {movies !== null ? (
              <AllMovieResults 
              movies={movies}
              chgMovie={props.chgMovie}
              expandBook={props.expandBook}
              mov={props.results}

              />
            ) : null }
          </div>
          
          </div>
       )
}

SearchMovie.propTypes = {
  results: PropTypes.array,
  setResults: PropTypes.func,
  expandBook: PropTypes.func,
};


export default SearchMovie;