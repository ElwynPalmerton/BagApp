import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import ThreeColumnLayout from "../Layout/ThreeColumnLayout";

function AddBagForm({
  formFields,
  setFormFields,
  handleFormChange,
  bagFormSubmit,
}) {
  function submitBagForm(e) {
    console.log(e);
    e.preventDefault();
    console.log("Submitting form: ", formFields);
    bagFormSubmit();
  }

  return (
    <ThreeColumnLayout>
      <Container>
        <Form onSubmit={(e) => submitBagForm(e)}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Bag ID
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="bagId"
                value={formFields.bagId}
                onChange={(e) => handleFormChange(e)}
                placeholder="Bag ID"
                // defaultValue="bag id"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Source
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="source"
                value={formFields.source}
                onChange={(e) => handleFormChange(e)}
                placeholder="Source"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Location
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="location"
                value={formFields.location}
                onChange={(e) => handleFormChange(e)}
                placeholder="Location"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Destination
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="destination"
                value={formFields.destination}
                onChange={(e) => handleFormChange(e)}
                placeholder="Destination"
              />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Bag
          </Button>
        </Form>
      </Container>
    </ThreeColumnLayout>
  );
}

export default AddBagForm;
