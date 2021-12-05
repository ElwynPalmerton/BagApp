import react, { useState } from "react";
import Form from "react-bootstrap/Form";
import Checkbox from "@mui/material/Checkbox";

function BagRow({
  bag,
  deliverBag,
  handleSelectCurrentBag,
  selectedRow,
  pickupBag,
}) {
  const classSelected = selectedRow === bag.id ? "SelectedRow" : "";
  const [checked, setChecked] = useState(false);

  const classCurrent = bag.currentTask ? "Current" : "";
  const classCompleted = bag.completed ? "Completed" : classCurrent;

  const classes = `${classCurrent} ${classSelected} ${classCompleted}`;

  function handleSelectCurrentRow(id) {
    console.log("bag# in BagRow:", id);
    handleSelectCurrentBag(bag.id);
  }

  function handleCheckPickupBag() {
    //Check to see if this one isn't current and isn't Completed.
    if (bag.currentTask === false && bag.completed === false) {
      pickupBag(bag.id);
    }

    console.log("Checked Pickup Bag");
  }

  function handleCheckDeliverBag() {
    if (bag.currentTask === true) {
      console.log("Call deliverBag");
      deliverBag(bag.id);
    }
    console.log("Checked Deliver Bag.");
  }

  return (
    <tr
      className={classes}
      // onClick={() => pickupBag(bag.bagId)}
      // ^-- in case you want to pickup bad directly from Table
      onClick={() => handleSelectCurrentRow(bag.id)}
    >
      <td>{bag.id}</td>
      <td>{bag.bagtag}</td>
      <td>{bag.source}</td>
      <td>
        {bag.longitude}, {bag.latitude}
      </td>
      <td>{bag.destination}</td>
      <td>{bag.currentTask ? "X" : ""}</td>

      <td>{bag.completed ? "X" : ""}</td>
      <td>
        <form onChange={handleCheckPickupBag}>
          <Checkbox
            sx={{ margin: "0", padding: "0" }}
            checked={bag.currentTask}
          ></Checkbox>
        </form>
      </td>
      <td>
        <form onChange={handleCheckDeliverBag}>
          <Checkbox
            sx={{ margin: "0", padding: "0" }}
            checked={bag.completed}
          ></Checkbox>
        </form>
      </td>
      {/* <td>{bag.currentTask ? "X" : ""}</td> */}
      {/* <td>{bag.completed ? "X" : ""}</td> */}
    </tr>
  );
}

export default BagRow;
