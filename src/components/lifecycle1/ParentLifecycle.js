import React, { Component } from "react";
import ChildLifecycle from "./ChildLifecycle";

class ParentLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Monika",
    };
    console.log("Parent Lifecycle  constructor");
    console.log("------------------------------");
  }

  componentDidMount() {
    console.log("Parent lifecycle componentDidMount");
    console.log("------------------------------");
  }

  shouldComponentUpdate() {
    console.log("Parent should component update");
    console.log("------------------------------");

    return true;
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate");
    console.log("------------------------------");
  }

  changeState = () => {
    this.setState({
      name: "Monika Abhijeet",
    });
  };
  render() {
    console.log("Parent Lifecycle render");
    console.log("------------------------------");

    return (
      <div>
        <div>Parent Lifecycle</div>
        <button onClick={this.changeState}> Change State</button>
        <ChildLifecycle />
      </div>
    );
  }
}

export default ParentLifecycle;
