import AddBagForm from "./AddBagForm";
import BagTable from "../ShowBags/BagTable";
import ThreeColumnLayout from "../../Layout/ThreeColumnLayout";

function AddBagPage({ addBag, bags }) {
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
