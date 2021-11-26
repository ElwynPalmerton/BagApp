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
      <AddBagForm
        addBag={addBag}
        handleFormChange={handleFormChange}
        formFields={formFields}
        setFormFields={setFormFields}
      />
      <BagDisplay bags={bags} />
    </div>
  );
}

export default AddBagPage;
