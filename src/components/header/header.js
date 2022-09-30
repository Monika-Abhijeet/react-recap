import "./header.css";
import { Component } from "react";

// function Header() {
//   return (
//     <div className="header-wrapper">
//       <p>This is a header component</p>
//     </div>
//   );
// }

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <p>This is a header </p>
      </div>
    );
  }
}

export default Header;
