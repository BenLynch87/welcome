import React from "react";

function Welcome(props) {
  let nameOut = props.match.params.name;
  if (nameOut === "default" || nameOut === undefined) {
    nameOut = props.name;
  }
  return <div className="Welcome">Welcome, {nameOut}!</div>;
}

export default Welcome;
