import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie, index) =>{
      return<div> 
        <div key={index}>{movie.title} {movie.time}</div>
        <ul>{movie.genres.map((genre, index) => {
        return <li key={index}>{genre}</li>
        })}</ul>
      </div>
    })}
  </div>;
}

export default Movies;
