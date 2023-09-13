import React from "react";

export default function Showcustomer(props) {
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">ADDRESS</th>
            <th scope="col">MOBILENO</th>
          </tr>
        </thead>
        <tbody>
          {props.arr.map((e) => (
            <tr>
              <th scope="row">{e.id}</th>
              <td> {e.name}</td>
              <td> {e.address}</td>
              <td>{e.mobileno}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}