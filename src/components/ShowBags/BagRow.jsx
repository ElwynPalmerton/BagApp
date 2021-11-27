import react from "react";

function BagRow({ bag, handleSelectCurrentBag, selectedRow }) {
  const classSelected = selectedRow === bag.bagId ? "SelectedRow" : "";

  const classCurrent = bag.currentTask ? "Current" : "";
  const classCompleted = bag.completed ? "Completed" : classCurrent;

  const classes = `${classCurrent} ${classSelected} ${classCompleted}`;

  return (
    <tr
      className={classes}
      //   className={selectedRow === bag.bagId ? "SelectedRow" : ""}
      //   className="SelectedRow"
      // onClick={() => pickupBag(bag.bagId)}
      onClick={() => handleSelectCurrentBag(bag.bagId)}
    >
      {/* <td>{selectedRow === bag.bagId ? "selected" : "x"}</td> */}
      <td>{bag.bagId}</td>
      <td>{bag.source}</td>
      <td>{bag.location}</td>
      <td>{bag.destination}</td>
      <td>{bag.currentTask ? "X" : ""}</td>
      <td>{bag.completed ? "X" : ""}</td>
    </tr>
  );
}

export default BagRow;
