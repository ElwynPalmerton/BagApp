import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

function BagDisplay({ bags }) {
  console.log(bags);
  return (
    <div>
      <Container className="mt-4" fluid="xl">
        <Row className="justify-content-md-center">
          <Col md="2"></Col>

          <Col md="8">
            <h1>Bags</h1>
            <Table striped bordered hover>
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
                    <tr>
                      <td>{bag.bagId}</td>
                      <td>{bag.source}</td>
                      <td>{bag.location}</td>
                      <td>{bag.destination}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col md="2"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default BagDisplay;
