import React, { Component, PureComponent } from "react";

class ChildLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Monika",
    };
    console.log("child Lifecycle  constructor");
    console.log("------------------------------");
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("child Lifecycle get derived state from props");

  //   return null;
  // }

  componentDidMount() {
    console.log("child lifecycle componentDidMount");
    console.log("------------------------------");
  }

  shouldComponentUpdate() {
    console.log("Child should component update");
    console.log("------------------------------");

    return false;
  }

  // getSnapshotBeforeUpdate(prevProps, prevtate) {
  //   console.log("Child getSnapshotBeforeUpdate");
  //   return null;
  // }

  componentDidUpdate() {
    console.log("Child componentDidUpdate");
    console.log("------------------------------");
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }
  render() {
    console.log("child render");
    console.log("------------------------------");

    return <div>Child Lifecycle</div>;
  }
}

export default ChildLifecycle;
