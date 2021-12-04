import { useEffect, useState } from "react";
import BagTable from "./BagTable";
import TwoColumnLayout from "../../Layout/TwoColumnLayout";
import SelectedBagForm from "./SelectedBagForm";
import axios from "axios";

function BagDisplayPage({ bags, pickupBag, deliverBag, initializeBags }) {
  const [selectedBag, setSelectedBag] = useState();
  const [currentBag, setCurrentBag] = useState();

  function selectCurrentBag(id) {
    console.log("Current bag: ", id);
    setSelectedBag(bags.find((bag) => bag.id === id));
  }

  function closeForm() {
    console.log("closing");
    setSelectedBag();
  }

  useEffect(() => {
    getAllBags();
  }, []);

  async function getAllBags() {
    axios.get("https://localhost:5001/api/bag").then((res) => {
      console.log("Get all bags on BagPage: ", res.data);

      const initialBags = [];
      res.data.forEach((bag) => {
        let newBag = {};
        newBag = { ...bag, bagtag: bag.bagtag };
        initialBags.push(newBag);
      });
      initializeBags(initialBags);
    });
  }

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
