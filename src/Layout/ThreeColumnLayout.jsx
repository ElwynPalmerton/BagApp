import react from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function ThreeColumnLayout({ children }) {
  return (
    <Container className="mt-4" fluid="xl">
      <Row className="justify-content-md-center">
        <Col md="2"></Col>
        <Col md="8">{children}</Col>
        <Col md="2"></Col>
      </Row>
      <br />
    </Container>
  );
}

export default ThreeColumnLayout;
