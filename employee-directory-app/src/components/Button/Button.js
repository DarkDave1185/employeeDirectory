import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div class="button">
      <div class="btn-success" onClick={props.changeButtonText}>
        {props.text}
      </div>
    </div>
  );
}

export default Button;
