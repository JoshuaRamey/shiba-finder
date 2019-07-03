import React from "react";

export default function Favorites(props) {
  return props.matches.map((dog, index) => {
    return (
      <div key={dog.image} className="favoriteCard">
        <img className="profileImage" src={dog.image} alt="dog.name" />
        <h2 className="dogName">{dog.name}</h2>
        <p className="dogDistance">Distance: {dog.distance} Km</p>
        <div className="buttonContainerFav">
          <button
            className="standardButton"
            onClick={() => props.removeFavorite(index)}
          >
            Remove
          </button>
          <button className="standardButton">Take a Walk</button>
        </div>
      </div>
    );
  });
}
