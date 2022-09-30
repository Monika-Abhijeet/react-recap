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
      <button onClick={sayHi}>Hi</button>
      <button onClick={() => sayHello()}>Hello</button>
      <button onClick={() => generateSquareNumber(10)}>
        GenerateSquareNumber
      </button>
    </div>
  );
}

export default EmployeeCard;
