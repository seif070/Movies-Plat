import React from 'react';

const MovieCard = ({ title, genre, year,Imagesrc }) => {
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <p>Genre: {genre}</p>
      <p>Year: {year}</p>
      <img src={Imagesrc}/>
    </div>
  );
};

export default MovieCard;
