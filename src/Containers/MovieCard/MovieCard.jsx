import React from 'react';
import './MovieCard.scss';


const MovieCard = () => {



  return (
    <article className='movieCard'>
      <img src="https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" alt="MadMax"/>
      <p className='title'>Mad Max: Fury Road</p>
      <p className='year'>2019</p>
    </article>
  )
}

export default MovieCard;