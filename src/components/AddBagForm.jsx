import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import ThreeColumnLayout from "../Layout/ThreeColumnLayout";
import InputField from "./InputField";

function AddBagForm({ formFields, setFormFields, handleFormChange, addBag }) {
  function clearForm() {
    setFormFields({
      bagId: "",
      source: "",
      location: "",
      destination: "",
    });
  }

  function submitBagForm(e) {
    e.preventDefault();
    addBag();
    clearForm();
  }

  return (
    <ThreeColumnLayout>
      <Container>
        <Form onSubmit={(e) => submitBagForm(e)}>
          <InputField
            name="bagId"
            text="Bag ID"
            inputValue={formFields.bagId}
            handleInputChange={handleFormChange}
          ></InputField>

          <InputField
            name="source"
            text="Source"
            inputValue={formFields.source}
            handleInputChange={handleFormChange}
          ></InputField>

          <InputField
            name="location"
            text="Location"
            inputValue={formFields.location}
            handleInputChange={handleFormChange}
          ></InputField>

          <InputField
            name="destination"
            text="Destination"
            inputValue={formFields.destination}
            handleInputChange={handleFormChange}
          ></InputField>

          <Button variant="primary" type="submit">
            Add Bag
          </Button>
        </Form>
      </Container>
    </ThreeColumnLayout>
  );
}

export default AddBagForm;
