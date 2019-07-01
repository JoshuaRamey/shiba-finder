import React from "react";

import { faHome, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation(props) {
  return (
    <div>
      <div className="navigation">
        <div className="navIcon" onClick={() => props.dogView()}>
          <FontAwesomeIcon icon={faHome} size="lg" />
        </div>
        <div className="navIcon" onClick={() => props.favoritesView()}>
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </div>
      </div>
    </div>
  );
}
