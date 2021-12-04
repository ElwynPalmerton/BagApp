import { useState } from "react";
import ThreeColumnLayout from "../../Layout/ThreeColumnLayout";
import { useNavigate } from "react-router";
import axios from "axios";
import Button from "@mui/material/Button";
import MuiInputField from "../MuiTextField";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import MuiButton from "../MuiButton";

function MuiLoginPage({ handleSubmitLogin }) {
  // const classes = useStyles();

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
          <div>
            <MuiInputField
              name="name"
              text="User Name"
              inputValue={user.name}
              handleInputChange={(e) => handleFormChange(e)}
            ></MuiInputField>

            <MuiInputField
              name="deviceId"
              text="Device ID#"
              inputValue={user.deviceId}
              handleInputChange={(e) => handleFormChange(e)}
            />
            <div className="text-center">
              <MuiButton text="Login"></MuiButton>
            </div>
          </div>
        </Form>
      </Container>
    </ThreeColumnLayout>
  );
}

export default MuiLoginPage;
