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
      {/* <EmployeeeList></EmployeeeList> */}
      <BrowserRouter>
        <Sidebar></Sidebar>
        <div class="app-container">
          <Routes>
            <Route path="/" element={<EmployeeeList></EmployeeeList>}></Route>
            <Route path="/personal" element={<PersonalDetails />}></Route>
            <Route path="/employee" element={<EmployeeeList />}></Route>
            <Route path="/employee/:id" element={<EmployeeDetails />}></Route>
          </Routes>
        </div>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
