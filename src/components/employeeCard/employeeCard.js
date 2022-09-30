function EmployeeCard(props) {
  return (
    <div className="employee-card">
      CapGemini
      <p>Name : {props.name}</p>
      <p>Emp id: {props.empId}</p>
      <p>Designation: {props.designation}</p>
    </div>
  );
}

export default EmployeeCard;
