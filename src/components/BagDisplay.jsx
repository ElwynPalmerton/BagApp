import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

function BagDisplay({ bags, selectBag = () => {} }) {
  console.log(bags);
  return (
    <div>
      <br />
      <h1>Bags</h1>
      <Table bordered>
        <thead>
          <tr>
            <th>Bag ID</th>
            <th>Source</th>
            <th>Location</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          {bags.map((bag, i) => {
            return (
              <tr
                className={bag.currentTask ? "Current" : null}
                onClick={() => selectBag(bag.bagId)}
                key={i}
              >
                <td>{bag.bagId}</td>
                <td>{bag.source}</td>
                <td>{bag.location}</td>
                <td>{bag.destination}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default BagDisplay;
