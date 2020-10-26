import React from "react";
import "./CardBody.css";

function CardBody(props) {
  return (
    <div class="object">
      <tr class="cardbody">
        <td>
          <img alt={props.name} src={props.picture}></img>
        </td>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.dob}</td>
      </tr>
    </div>
  );
}

export default CardBody;
