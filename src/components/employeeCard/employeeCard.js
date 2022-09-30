import { Button, Alert } from "react-bootstrap";

function EmployeeCard(props) {
  function sayHi() {
    alert("hi " + props.name);
  }

  function sayHello() {
    alert("Hello " + props.name);
  }
  function generateSquareNumber(val) {
    alert(val * val);
  }
  return (
    <div className="employee-card">
      CapGemini
      <p>Name : {props.name}</p>
      <p>Emp id: {props.empId}</p>
      <p>Designation: {props.designation}</p>
      <Button variant="outline-danger" onClick={sayHi}>
        Hi
      </Button>
      <Button variant="warning" onClick={() => sayHello()}>
        Hello
      </Button>
      <Alert variant="danger">Hello</Alert>
      <button onClick={() => generateSquareNumber(10)}>
        GenerateSquareNumber
      </button>
    </div>
  );
}

export default EmployeeCard;
