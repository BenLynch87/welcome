import React from "react";

const JeopardyCatagories = (props) => {
  return (
    <div>
      <button onClick={props.click} id="0">
        {props.cat1}
      </button>
      <button onClick={props.click} id="1">
        {props.cat2}
      </button>
      <button onClick={props.click} id="2">
        {props.cat3}
      </button>{" "}
      <br />
      <strong>Score: </strong>
      {props.score}
    </div>
  );
};

export default JeopardyCatagories;
