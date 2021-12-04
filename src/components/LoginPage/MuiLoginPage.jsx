import { useState } from "react";
import ThreeColumnLayout from "../../Layout/ThreeColumnLayout";
import InputField from "../InputField";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import { withStyles } from "@mui/styles";
import { inputLabelClasses } from "@mui/material/InputLabel";
import MuiInputField from "../MuiTextField";

const style = {
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
    // <ThreeColumnLayout>
    //   <Container>
    //     <Form onSubmit={(e) => handleSubmitForm(e)}>

    <div>
      <MuiInputField
        name="name"
        text="User Name"
        inputValue={user.name}
        handleInputChange={(e) => handleFormChange(e)}
      ></MuiInputField>

      <br />

      <MuiInputField
        name="deviceId"
        text="Device ID#"
        inputValue={user.deviceId}
        handleInputChange={(e) => handleFormChange(e)}
      />

      <br />
      <br />
      <br />

      <Button
        sx={{ ...style }}
        variant="outlined"
        disableElevation
        type="submit"
      >
        Login
      </Button>
    </div>
    //       {/* <StyledButton>styled</StyledButton> */}
    //     </Form>
    //   </Container>
    // </ThreeColumnLayout>
  );
}

export default MuiLoginPage;
