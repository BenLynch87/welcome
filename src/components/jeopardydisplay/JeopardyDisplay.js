import React from "react";

const JeopardyDisplay = (props) => {
  return (
    <div>
      <strong>Question: </strong>
      {props.question}
      <br />
      <strong>Value: </strong>
      {props.value}
      <br />
      <strong>Category: </strong>
      {props.category}
      <br />
      <input onChange={props.input} type="text" name="answer" id="answerBox" />
      <button onClick={props.click}>Submit</button>
      <strong>Score: </strong>
      {props.score}
    </div>
  );
};

export default JeopardyDisplay;
