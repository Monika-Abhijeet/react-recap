import "./employeeList.css";
import EmployeeCard from "../employeeCard/employeeCard";
import ParentLifecycle from "../lifecycle1/ParentLifecycle";
function EmployeeeList() {
  return (
    <div className="employeelist-wrapper">
      <h1>test</h1>
      <h1>List of Employees</h1>
      {/* <ParentLifecycle></ParentLifecycle> */}
      <EmployeeCard
        name="Monika"
        empId="123456"
        designation="developer"
      ></EmployeeCard>
      <EmployeeCard
        name="Suman"
        empId="1237656"
        designation="Tester"
      ></EmployeeCard>
      <EmployeeCard
        name="Sharad"
        empId="11111"
        designation="Manager"
      ></EmployeeCard>
    </div>
  );
}
export default EmployeeeList;
