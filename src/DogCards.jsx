import React from "react";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DogCards(props) {
  return props.doggos.map(dog => {
    return (
      <div>
        <div className="card">
          <img className="profileImage" src={dog.image} alt="dog.name" />
          <h2 className="dogName">{dog.name}</h2>
          <p className="dogDistance">Distance: {dog.distance} Km</p>
          <div className="buttonContainerNorm">
            <button
              className="dislikeButton"
              onClick={() => props.dislike(dog)}
            >
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </button>
            <button className="heartButton" onClick={() => props.favorite(dog)}>
              <FontAwesomeIcon icon={faHeart} size="2x" />
            </button>
          </div>
        </div>
      </div>
    );
  });
}
