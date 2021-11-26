import { useState } from "react";
import ThreeColumnLayout from "../Layout/ThreeColumnLayout";
import InputField from "./InputField";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function LoginPage() {
  const [user, setUser] = useState({
    name: "",
    deviceId: "",
  });

  function handleFormChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmitForm() {
    console.log("Submit... Logging in!");
  }

  return (
    <ThreeColumnLayout>
      <Container>
        <Form onSubmit={(e) => handleSubmitForm(e)}>
          <InputField
            name="name"
            text="User Name"
            inputValue={user.name}
            handleInputChange={(e) => handleFormChange(e)}
          ></InputField>
          <InputField
            name="deviceId"
            text="Device ID#"
            inputValue={user.deviceId}
            handleInputChange={(e) => handleFormChange(e)}
          ></InputField>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </ThreeColumnLayout>
  );
}

export default LoginPage;
