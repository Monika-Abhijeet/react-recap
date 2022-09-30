import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <ul>
        <Link to="/employee/1">
          <li>Employee Details</li>
        </Link>
        <Link to="/personal">
          <li>Personal Details</li>
        </Link>
        <li>Grocerries</li>
        <li>Electonics</li>
        <li>Baby Products</li>
      </ul>
    </div>
  );
}
export default Sidebar;
