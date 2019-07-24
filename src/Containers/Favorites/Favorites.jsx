import React, { Component } from "react";


const Favorites = ({title, path, releaseDate}) => {
  return (
    <article>
      <img
          className="card-img"
          src={path}
          alt={`${title} poster`}
      />
      <p className="title">{title}</p>
      <p className="year">{releaseDate}</p>
    </article>
    );
}


export default Favorites;
