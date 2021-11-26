import AddBagForm from "./AddBagForm";
import BagDisplay from "./BagDisplay";

function AddBagPage({
  addBag,
  formFields,
  setFormFields,
  bags,
  handleFormChange,
}) {
  return (
    <div>
      <AddBagForm addBag={addBag} />
      <BagDisplay bags={bags} />
    </div>
  );
}

export default AddBagPage;
