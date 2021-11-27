import { useEffect, useState } from "react";
import BagTable from "./BagTable";
import TwoColumnLayout from "../../Layout/TwoColumnLayout";
import SelectedBagForm from "./SelectedBagForm";

function BagDisplayPage({ bags, pickupBag, addBag, deliverBag }) {
  const [selectedBag, setSelectedBag] = useState();
  const [currentBag, setCurrentBag] = useState();

  function selectCurrentBag(id) {
    console.log("Current bag: ", id);
    setSelectedBag(bags.find((bag) => bag.bagId === id));
  }

  function closeForm() {
    console.log("closing");
    setSelectedBag();
  }

  useEffect(() => {
    console.log("selected: ", selectedBag);
  }, [selectedBag]);

  return (
    <TwoColumnLayout
      left={
        <BagTable
          bags={bags}
          selectBag={pickupBag}
          selectCurrentBag={(id) => selectCurrentBag(id)}
        />
      }
      right={
        <SelectedBagForm
          selectedBag={selectedBag}
          pickupBag={pickupBag}
          closeForm={closeForm}
          deliverBag={deliverBag}
        />
      }
    />
  );
}

export default BagDisplayPage;
