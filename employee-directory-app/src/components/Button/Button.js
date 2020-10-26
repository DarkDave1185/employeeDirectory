import React, { useState } from "react";
import "./Button.css";

function Button(props) {
  const [buttonText, setButtonText] = useState("Alphabetize");
  const [users, setUsers] = useState([]);

  const changeButtonText = (e) => {
    e.preventDefault();

    if (buttonText === "Alphabetize") {
      setButtonText("Reset");
      const sortUsers = users.sort((a, b) =>
        a.name.first.localeCompare(b.name.first)
      );
      setUsers(sortUsers);
    } else if (buttonText === "Reset") {
      setButtonText("Alphabetize");
    }
  };

  return (
    <div class="button">
      <div class="btn-success" onClick={props.changeButtonText}>
        {props.text}
      </div>
    </div>
  );
}

export default Button;
