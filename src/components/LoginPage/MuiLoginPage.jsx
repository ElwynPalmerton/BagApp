import { useState } from "react";
import ThreeColumnLayout from "../../Layout/ThreeColumnLayout";
import { useNavigate } from "react-router";
import axios from "axios";
import Button from "@mui/material/Button";
import MuiInputField from "../MuiTextField";
import FormControl from "@mui/material/FormControl";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const buttonStyle = {
  backgroundColor: "#6850af",
  color: "white",
  fontFamily: "Source Sans Pro",
  borderStyle: "none",
  fontWeight: "bold",
  "&:hover": { backgroundColor: "#6244BB" },
};

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
              <Button
                sx={{ ...buttonStyle, marginTop: "1rem" }}
                variant="outlined"
                disableElevation
                type="submit"
              >
                Login
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </ThreeColumnLayout>
  );
}

export default MuiLoginPage;
