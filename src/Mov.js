import React from 'react';
import movies from './movies.json'

export function Mov () {
  return (
    <ul>
   {movies.map(function(movie) {
       return <li>{movie.title}</li>
   })}
  </ul>
  );
};
