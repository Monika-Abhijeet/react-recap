import axios from "axios";
import { useEffect } from "react";

function EmployeeDetails() {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
    });

    // let request = {
    //   id: 1,
    //   userId: 2,
    //   title: "Monika",
    //   body: "Hello Monika",
    // };
    // axios
    //   .post("https://jsonplaceholder.typicode.com/posts", request)
    //   .then((response) => console.log(response));

    // let request = {
    //   id: 1,
    //   userId: 2,
    //   title: "Monika Abhijeet",
    //   body: " welcome to react session",
    // };

    // axios
    //   .put("https://jsonplaceholder.typicode.com/posts/1", request)
    //   .then((response) => {
    //     console.log(response);
    //   });
    axios.delete("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
      console.log(res);
    });
  });

  return <h1>Employee Details</h1>;
}

export default EmployeeDetails;
