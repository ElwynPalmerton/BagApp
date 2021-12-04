import react from "react";

function BagRow({ bag, handleSelectCurrentBag, selectedRow }) {
  const classSelected = selectedRow === bag.id ? "SelectedRow" : "";

  const classCurrent = bag.currentTask ? "Current" : "";
  const classCompleted = bag.completed ? "Completed" : classCurrent;

  const classes = `${classCurrent} ${classSelected} ${classCompleted}`;

  function handleSelectCurrentRow(id) {
    console.log("bag# in BagRow:", id);
    handleSelectCurrentBag(bag.id);
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
      {/* <td>{bag.currentTask ? "X" : ""}</td> */}
      {/* <td>{bag.completed ? "X" : ""}</td> */}
    </tr>
  );
}

export default BagRow;
