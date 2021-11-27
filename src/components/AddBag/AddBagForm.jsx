import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import InputField from "../InputField";
import { useState } from "react";

function AddBagForm({ addBag }) {
  const [formFields, setFormFields] = useState({
    bagId: "",
    source: "",
    location: "",
    destination: "",
  });

  function handleFormChange(e) {
    let value = e.target.value;
    let name = e.target.name;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  }

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
    addBag(formFields);
    clearForm();
  }

  return (
    <div>
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
      <br />
      <br />
    </div>
  );
}

export default AddBagForm;
