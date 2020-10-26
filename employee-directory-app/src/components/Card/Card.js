import React from "react";
import "./Card.css";

function Card(props) {
  return <card class="card">{props.children}</card>;
}

export default Card;
