import React, { Component } from "react";
import JeopardyService from "../../jeopardyService.js";
import JeopardyDisplay from "../jeopardydisplay/JeopardyDisplay.js";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      response: "",
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //check for correct answer, update points, refresh question
  answerQuestion = (event) => {
    if (this.state.response === this.state.data.answer) {
      this.setState({ score: this.state.score + this.state.data.value });
    } else {
      this.setState({ score: this.state.score - this.state.data.value });
    }
    this.getNewQuestion();
  };

  handleChange = (event) => {
    this.setState({ response: event.target.value });
    console.log(this.state.response);
  };

  //display the results on the screen
  render() {
    let category = "loading";

    if (this.state.data.category && this.state.data.category.title) {
      category = this.state.data.category.title;
    }
    return (
      <JeopardyDisplay
        question={this.state.data.question}
        value={this.state.data.value}
        category={category}
        click={this.answerQuestion}
        input={this.handleChange}
        score={this.state.score}
      />
    );
  }
}
export default Jeopardy;
