import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Sidebar from "./components/sidebar/sidebar";
import EmployeeeList from "./components/employeeList/employeeList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalDetails from "./components/personalDetails/personDeatils";
import EmployeeDetails from "./components/employeeDetails/employeeDetails";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar></Sidebar>
      {/* <EmployeeeList></EmployeeeList> */}
      <div class="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<EmployeeeList />}></Route>
            <Route path="/personal" element={<PersonalDetails />}></Route>
            <Route path="/employee" element={<EmployeeDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
