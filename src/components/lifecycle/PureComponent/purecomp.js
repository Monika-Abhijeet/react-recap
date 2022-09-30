import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("--------- pUre component");
    return <div>This is a pure component {this.props.name}</div>;
  }
}

export default PureComp;
