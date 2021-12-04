import { useEffect, useState } from "react";
import AddBagForm from "./AddBagForm";
import BagTable from "../ShowBags/BagTable";
import ThreeColumnLayout from "../../Layout/ThreeColumnLayout";
import NewBagToast from "./NewBagToast";
import { Button, Container } from "react-bootstrap";
import MuiAddBagForm from "./MuiAddBagForm";

function AddBagPage({ addBag, bags }) {
  const [showToast, setShowToast] = useState(false);

  const testBag = {
    bagtag: 9,
    source: "TST",
    destination: "TST",
    latitude: 9,
    longitude: 9,
  };

  const [newBag, setNewBag] = useState(testBag);

  function toggleShowToast() {
    console.log("toggling");
    setShowToast(!showToast);
  }

  useEffect(() => {
    console.log(showToast);
  });

  function showNewBagToast(addedBag) {
    setTimeout(() => {
      setNewBag(addedBag);
      setShowToast(true);
    }, 1000);
  }

  return (
    <div>
      <ThreeColumnLayout>
        <div>
          <NewBagToast
            newBag={newBag}
            showToast={showToast}
            toggleShowToast={toggleShowToast}
          />
          <Container>
            <h1 className="sourceFont">Add Task</h1>
          </Container>
          <AddBagForm addBag={addBag} showNewBagToast={showNewBagToast} />
          {/* <BagTable bags={bags} /> */}
          {/* <Button onClick={toggleShowToast} className="mb-2">
            Toggle Toast <strong>with</strong> Animation
          </Button> */}
        </div>
      </ThreeColumnLayout>
    </div>
  );
}

export default AddBagPage;
