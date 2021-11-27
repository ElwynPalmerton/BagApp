import AddBagForm from "./AddBagForm";
import BagDisplay from "./BagDisplay";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/container";
import ThreeColumnLayout from "../Layout/ThreeColumnLayout";

function AddBagPage({
  addBag,
  formFields,
  setFormFields,
  bags,
  handleFormChange,
}) {
  return (
    <div>
      <ThreeColumnLayout>
        <AddBagForm addBag={addBag} />
        <BagDisplay bags={bags} />
      </ThreeColumnLayout>
    </div>
  );
}

export default AddBagPage;
