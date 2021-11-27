import React from "react";
import Table from "react-bootstrap/Table";

function BagTable({ bags, pickupBag = () => {}, selectCurrentBag = () => {} }) {
  //You can't select a bag from the  AddBagPage.
  return (
    <div>
      <h1>Bags</h1>
      <Table bordered>
        <thead>
          <tr>
            <th>Bag ID</th>
            <th>Source</th>
            <th>Location</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          {bags.map((bag, i) => {
            return (
              <tr
                className={bag.currentTask ? "Current" : null}
                // onClick={() => pickupBag(bag.bagId)}
                onClick={() => selectCurrentBag(bag.bagId)}
                key={i}
              >
                <td>{bag.bagId}</td>
                <td>{bag.source}</td>
                <td>{bag.location}</td>
                <td>{bag.destination}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default BagTable;
