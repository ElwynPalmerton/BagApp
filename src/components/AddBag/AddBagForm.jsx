import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import InputField from "../InputField";
import { useState } from "react";
import axios from "axios";
import MuiButton from "../MuiButton";

function AddBagForm({ addBag, showNewBagToast }) {
  const [formFields, setFormFields] = useState({
    bagId: "",
    source: "",
    latitude: "",
    longitude: "",
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
      latitude: "",
      longitude: "",
      destination: "",
    });
  }

  function submitBagForm(e) {
    e.preventDefault();

    axios
      .post(`https://localhost:5001/api/bag/${formFields.bagId}`, {
        ...formFields,
        bagtag: formFields.bagId,
      })
      .then((res) => {
        console.log("POST result: ", res);

        // Check to see if this is actually successful.
        addBag(formFields);
        showNewBagToast(formFields);
      })
      .catch((error) => {
        showNewBagToast(formFields);
      });

    clearForm();
  }

  return (
    <div>
      <Container>
        <Form onSubmit={(e) => submitBagForm(e)}>
          <InputField
            name="bagId"
            text="Bag Tag"
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
            name="latitude"
            text="Latitude"
            inputValue={formFields.latitude}
            handleInputChange={handleFormChange}
          ></InputField>

          <InputField
            name="longitude"
            text="Longitude"
            inputValue={formFields.longitude}
            handleInputChange={handleFormChange}
          ></InputField>

          <InputField
            name="destination"
            text="Destination"
            inputValue={formFields.destination}
            handleInputChange={handleFormChange}
          ></InputField>

          <div className="text-center">
            <MuiButton text={text}>Add Bag</MuiButton>
          </div>
        </Form>
      </Container>
      <br />
      <br />
    </div>
  );
}

export default AddBagForm;
