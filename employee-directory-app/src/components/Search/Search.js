import React from "react";
import "./Search.css";
function Search(props) {
  return (
    <div class="search">
      <input
        class="input"
        placeholder="Search Name Here"
        value={props.value}
        onChange={props.handleInputChange}
        type="text"
      />
    </div>
  );
}

export default Search;
