import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Link, generatePath } from "react-router-dom";

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

  const path = generatePath("/selectedbag/:id/", {
    id: bag.bagtag,
  });

  const classes = `${classCurrent} ${classSelected} ${classCompleted}`;

  function handleSelectCurrentRow(id) {
    handleSelectCurrentBag(bag.id);
  }

  function handleCheckPickupBag() {
    //Check to see if this one isn't current and isn't Completed.
    if (bag.currentTask === false && bag.completed === false) {
      pickupBag(bag.id);
    }
  }

  function handleCheckDeliverBag() {
    if (bag.currentTask === true) {
      deliverBag(bag.id);
    }
  }

  return (
    <tr
      key={bag.id}
      className={classes}
      // onClick={() => pickupBag(bag.bagId)}
      // ^-- in case you want to pickup bad directly from Table
      onClick={() => handleSelectCurrentRow(bag.id)}
    >
      <td>{bag.id}</td>
      <td>
        <Link to={path}>{bag.bagtag}</Link>
      </td>
      <td>{bag.source}</td>
      <td>
        {bag.longitude}, {bag.latitude}
      </td>
      <td>{bag.destination}</td>
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
    </tr>
  );
}

export default BagRow;
