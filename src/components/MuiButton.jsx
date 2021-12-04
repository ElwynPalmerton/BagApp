import Button from "@mui/material/Button";

const buttonStyle = {
  backgroundColor: "#6850af",
  color: "white",
  fontFamily: "Source Sans Pro",
  borderStyle: "none",
  fontWeight: "bold",
  "&:hover": { backgroundColor: "#6244BB" },
};

function MuiButton({ text }) {
  return (
    <Button
      sx={{ ...buttonStyle, marginTop: "1rem" }}
      variant="outlined"
      disableElevation
      type="submit"
    >
      {text}
    </Button>
  );
}

export default MuiButton;
