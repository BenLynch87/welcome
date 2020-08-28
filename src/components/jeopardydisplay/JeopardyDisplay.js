import React from "react";

const JeopardyDisplay = (props) => {
  return (
    <div>
      <strong>Category: </strong>
      {props.category}
      <br />
      <strong>Value: </strong>
      {props.value}
      <br />
      <strong>Question: </strong>
      {props.question}
      <br />
      <input onChange={props.input} type="text" name="answer" id="answerBox" />
      <button onClick={props.click}>Submit</button>
      <strong>Score: </strong>
      {props.score}
    </div>
  );
};

export default JeopardyDisplay;
