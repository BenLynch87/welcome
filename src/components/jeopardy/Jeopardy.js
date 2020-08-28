import React, { Component } from "react";
import JeopardyService from "../../jeopardyService.js";
import JeopardyDisplay from "../jeopardydisplay/JeopardyDisplay.js";
import JeopardyCatagories from "../jeopardycatagories/JeopardyCatagories.js";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      data2: {},
      data3: {},
      score: 0,
      response: "",
      isSelected: false,
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

  getNewQuestion2() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data2: result.data[0],
      });
    });
  }

  getNewQuestion3() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data3: result.data[0],
      });
    });
  }

  refreshQuestions() {
    this.getNewQuestion();
    this.getNewQuestion2();
    this.getNewQuestion3();
  }

  componentDidMount() {
    this.refreshQuestions();
  }
  //check for correct answer, update points, refresh question
  answerQuestion = (event) => {
    if (this.state.response === this.state.data.answer) {
      this.setState({ score: this.state.score + this.state.data.value });
    } else {
      this.setState({ score: this.state.score - this.state.data.value });
    }
    this.refreshQuestions();
    this.setState({ isSelected: false });
  };

  selectCategory = (event) => {
    if (event.target.id === "1") {
      this.setState({ data: this.state.data2 });
    } else if (event.target.id === "2") {
      this.setState({ data: this.state.data3 });
    }
    this.setState({ isSelected: true });
  };

  handleChange = (event) => {
    this.setState({ response: event.target.value });
    console.log(this.state.response);
  };

  //display the results on the screen
  render() {
    let category = ["loading", "loading", "loading"];
    if (this.state.data3.category && this.state.data3.category.title) {
      category[0] = this.state.data.category.title;
      category[1] = this.state.data2.category.title;
      category[2] = this.state.data3.category.title;
    }

    if (this.state.isSelected === false) {
      return (
        <JeopardyCatagories
          cat1={category[0]}
          cat2={category[1]}
          cat3={category[2]}
          click={this.selectCategory}
          score={this.state.score}
        />
      );
    } else {
      return (
        <JeopardyDisplay
          question={this.state.data.question}
          value={this.state.data.value}
          category={category[0]}
          click={this.answerQuestion}
          input={this.handleChange}
          score={this.state.score}
        />
      );
    }
  }
}
export default Jeopardy;
