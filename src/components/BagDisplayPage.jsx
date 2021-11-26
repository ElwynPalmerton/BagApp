import { useState } from "react";
import BagDisplay from "./BagDisplay";
import TwoColumnLayout from "../Layout/TwoColumnLayout";
import SelectedBagForm from "./SelectedBagForm";

function BagDisplayPage({ bags, selectBag }) {
  const [selectedBag, setSelectedBag] = useState();

  function handleBagSelection(id) {
    //Find the bag by id and then set the selected bag to that bag.
    // Then the handlers for Select the bag, and Complete the Task
    // need to be completed.
  }

  return (
    <TwoColumnLayout
      left={<BagDisplay bags={bags} selectBag={selectBag} />}
      right={<SelectedBagForm selectedBag={selectedBag} />}
    />
  );
}

export default BagDisplayPage;
