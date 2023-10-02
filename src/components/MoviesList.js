import React from 'react';
import MovieCard from './MovieCard'; 
import './MoviesList.css';

const MoviesList = ({ movies }) => {
  return (


    <div className="movies-list">

      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          genre={movie.genre}
          year={movie.year}
          Imagesrc={movie.Imagesrc}
        />
      ))}
    </div>
  );
};

export default MoviesList;
