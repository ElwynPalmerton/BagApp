import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function TwoColumnLayout({ left, right }) {
  return (
    <Container className="mt-4" fluid="xl">
      <Row className="justify-content-md-center">
        <Col sm="1"></Col>
        <Col sm="6">{left}</Col>
        <Col sm="4">{right}</Col>
        <Col sm="1"></Col>
      </Row>
      <br />
    </Container>
  );
}

export default TwoColumnLayout;
