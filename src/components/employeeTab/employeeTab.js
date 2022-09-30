function EmployeeTab(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.fname}</td>
      <td>{props.lname}</td>
      <td>@{props.username}</td>
    </tr>
  );
}

export default EmployeeTab;
