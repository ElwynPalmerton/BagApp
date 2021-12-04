import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import { withStyles } from "@mui/styles";
import { inputLabelClasses } from "@mui/material/InputLabel";

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

function MuiInputField({ text, name, inputValue, handleInputChange }) {
  return (
    <CustomTextField
      label={text}
      name={name}
      value={inputValue}
      onChange={handleInputChange}
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
      sx={{ borderBottomColor: "red" }}
      // placeholder="hello"
      id="standard-basic"
      variant="standard"
      disableAnimation={true}
    />
  );
}

export default MuiInputField;
