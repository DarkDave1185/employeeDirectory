import React from "react";
import "./Row.css";
function Row(props) {
  return (
    <div className="row justify-content-center row-responsive">
      {props.children}
    </div>
  );
}

export default Row;
