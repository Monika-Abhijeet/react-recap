import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Sidebar from "./components/sidebar/sidebar";
import EmployeeeList from "./components/employeeList/employeeList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar></Sidebar>
      <EmployeeeList></EmployeeeList>
      <Footer></Footer>
    </div>
  );
}

export default App;
