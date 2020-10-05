import React from "react";
import Search from "../Search/Search";
import Button from "../Button/Button";
import { useState } from "react";

function Header() {
  const [users, setUsers] = useState([]);
  const [searchedUser, setSearchedUser] = useState("");
  const [buttonText, setButtonText] = useState("Alphabetize");

  const handleInputChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setSearchedUser(value);
  };

  const changeButtonText = (e) => {
    e.preventDefault();

    if (buttonText === "Alphabetize") {
      setButtonText("Reset");
      const sortUsers = users.sort((a, b) =>
        a.name.last.localeCompare(b.name.last)
      );
      setUsers(sortUsers);
    } else if (buttonText === "Reset") {
      setButtonText("Alphabetize");
    }
  };

  return (
    <div class="header">
      <h1>Employee Directory</h1>
      <Search
        class="title justify-content-center"
        handleInputChange={handleInputChange}
        value={searchedUser}
      />
      <Button
        class="button btn btn-outline-secondary"
        changeButtonText={changeButtonText}
        text={buttonText}
      />
    </div>
  );
}

export default Header;
