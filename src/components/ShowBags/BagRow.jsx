import react from "react";

function BagRow({ bag, selectCurrentBag }) {
  const class1 = bag.currentTask ? "Current" : "";
  const classes = bag.completed ? "Completed" : class1;

  return (
    <tr
      //   className={bag.currentTask ? "Current" : null}
      className={classes}
      // onClick={() => pickupBag(bag.bagId)}
      onClick={() => selectCurrentBag(bag.bagId)}
    >
      <td>{bag.bagId}</td>
      <td>{bag.source}</td>
      <td>{bag.location}</td>
      <td>{bag.destination}</td>
    </tr>
  );
}

export default BagRow;
