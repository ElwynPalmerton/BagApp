import AddBagForm from "./AddBagForm";
import BagTable from "./BagTable";
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
        <BagTable bags={bags} />
      </ThreeColumnLayout>
    </div>
  );
}

export default AddBagPage;
