import React from "react";
import "./App.css";

function Gallery(props) {
  return (
    <div className="gal">
      <div className="box">
        <img className="image" src={props.objectImg} alt={props.title} />
        <p className="text">{props.artist}</p>
      </div>
    </div>
  );
}

export default Gallery;
