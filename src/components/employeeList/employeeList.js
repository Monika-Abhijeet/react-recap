import "./employeeList.css";
import EmployeeCard from "../employeeCard/employeeCard";
import ParentLifecycle from "../lifecycle1/ParentLifecycle";
import { Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
import EmployeeTab from "../employeeTab/employeeTab";

function EmployeeeList() {
  let employeeDetails = [
    {
      id: 1,
      fname: "Monika",
      lname: "Abhijeet",
      username: "moni",
    },
    {
      id: 2,
      fname: "Sharad",
      lname: "D",
      username: "sharu",
    },
    {
      id: 3,
      fname: "Ishika",
      lname: "Gupta",
      username: "ishGupta",
    },
  ];
  return (
    <div className="employeelist-wrapper">
      <h1>List of Employees</h1>
      <Form>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
          ></Form.Control>
          <Form.Text>
            Enter name in Firstname middlename lastName format
          </Form.Text>
        </Form.Group>
      </Form>
      <Table bordered striped hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {employeeDetails.map((emp) => {
            return (
              <EmployeeTab
                id={emp.id}
                fname={emp.fname}
                lname={emp.lname}
                username={emp.username}
              ></EmployeeTab>
            );
          })}
        </tbody>
      </Table>

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
