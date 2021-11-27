import AddBagForm from "./AddBagForm";
import BagTable from "../ShowBags/BagTable";
import ThreeColumnLayout from "../../Layout/ThreeColumnLayout";

function AddBagPage({ addBag, bags }) {
  return (
    <div>
      <ThreeColumnLayout>
        <div>
          <AddBagForm addBag={addBag} />
          <BagTable bags={bags} />
        </div>
      </ThreeColumnLayout>
    </div>
  );
}

export default AddBagPage;
