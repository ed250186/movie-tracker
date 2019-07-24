import React from "react";

const Favorites = ({ title, path, releaseDate }) => {
  return (
    <article className="movieCard">
      <img className="card-img" src={path} alt={`${title} poster`} />
      <p className="title">{title}</p>
      <p className="year">{releaseDate}</p>
    </article>
  );
};

export default Favorites;
