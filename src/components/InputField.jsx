import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function InputField({ text, name, inputValue, handleInputChange }) {
  return (
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        {text}
      </Form.Label>
      <Col sm="10">
        <Form.Control
          name={name}
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
          placeholder={text}
          // defaultValue="bag id"
        />
      </Col>
    </Form.Group>
  );
}

export default InputField;
