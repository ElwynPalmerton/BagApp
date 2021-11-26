import { useState } from "react";
import ThreeColumnLayout from "../Layout/ThreeColumnLayout";
import InputField from "./InputField";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router";
import { propTypes } from "react-bootstrap/esm/Image";

function LoginPage({ handleSubmitLogin, ...props }) {
  const [user, setUser] = useState({
    name: "",
    deviceId: "",
  });

  let navigate = useNavigate();

  function handleFormChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function clearForm() {
    setUser({
      name: "",
      deviceId: "",
    });
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    handleSubmitLogin(user);
    clearForm();
    navigate("/bags", { replace: true });
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
