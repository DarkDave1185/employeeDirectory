import React from "react";
import "./IndexCard.css";

function IndexCard(props) {
  return (
    <div class="index-card">
      <td>
        <img alt={props.name} src={props.picture}></img>
      </td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
    </div>
  );
}

export default IndexCard;
