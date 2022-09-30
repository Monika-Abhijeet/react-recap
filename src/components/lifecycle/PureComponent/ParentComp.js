import { Component } from "react";
import PureComp from "./purecomp";
import RegComp from "./regComp";
class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Monika",
    };
  }

  //   componentDidMount() {
  //     setInterval(() => {
  //       this.setState({
  //         name: "Monika",
  //       });
  //     }, 4000);
  //   }

  render() {
    console.log("------- parent comp render");
    return (
      <div>
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}
export default ParentComp;
