import React from "react";
import "./App.css";

function Button(props) {
  return (
    <div className="buttonContainer">
      <button value="-5" className="button" onClick={props.handleIterate}>
        back 5
      </button>
      <button value="-1" className="button" onClick={props.handleIterate}>
        back
      </button>
      <button value="1" className="button" onClick={props.handleIterate}>
        forward
      </button>
      <button value="5" className="button" onClick={props.handleIterate}>
        forward 5
      </button>
    </div>
  );
}

export default Button;
