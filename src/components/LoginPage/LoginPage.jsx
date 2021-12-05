import { useState } from "react";
import ThreeColumnLayout from "../../Layout/ThreeColumnLayout";
import InputField from "../InputField";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { withStyles } from "@mui/styles";
import { inputLabelClasses } from "@mui/material/InputLabel";

const style = {
  backgroundColor: "#6850af",
  color: "white",
  fontFamily: "Source Sans Pro",
  borderStyle: "none",
  fontWeight: "bold",
  "&:hover": { backgroundColor: "#6244BB" },
};

const CustomTextField = withStyles({
  // Override default CSS for input
  root: {
    "& .MuiInput-underline": {
      // Remove the ripple effect on input
      "&:after": {
        // borderBottom: "initial",
        borderBottomColor: "#004080",
      },
    },
  },
})(TextField);

function LoginPage({ handleSubmitLogin }) {
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

          <CustomTextField
            // InputLabelProps={{
            //   style: { color: "#004080" },
            // }}
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: "grey",
                [`&.${inputLabelClasses.shrink}`]: {
                  // set the color of the label when shrinked (usually when the TextField is focused)
                  color: "004080",
                  fontWeight: "bold",
                },
              },
            }}
            label="Name"
            sx={{ borderBottomColor: "red" }}
            name="deviceId"
            // placeholder="hello"
            id="standard-basic"
            variant="standard"
            disableAnimation={true}
          />
          <Button
            sx={{ ...style }}
            variant="outlined"
            disableElevation
            type="submit"
          >
            Login
          </Button>
          {/* <StyledButton>styled</StyledButton> */}
        </Form>
      </Container>
    </ThreeColumnLayout>
  );
}

export default LoginPage;
