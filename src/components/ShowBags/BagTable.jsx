import React from "react";
import Table from "react-bootstrap/Table";
import BagRow from "./BagRow";
import { useState, useEffect } from "react";

function BagTable({
  bags,
  deliverBag = () => {},
  pickupBag = () => {},
  selectCurrentBag = () => {},
}) {
  const [selectedRow, setSelectedRow] = useState();

  function handleSelectCurrentBag(id) {
    setSelectedRow(id);
    selectCurrentBag(id);
  }

  useEffect(() => {
    console.log("SelectedRow in BagTable: ", selectedRow);
  });

  return (
    <div>
      <h1 className="sourceFont">Work Assignments</h1>
      <Table bordered>
        <thead>
          <tr>
            <th>Id</th>
            <th>Bag Tag</th>
            <th>Source</th>
            <th>Latitude / Longitude</th>
            <th>Destination</th>
            <th>Current</th>
            <th>Delivered</th>
            <th>Pickup Bag</th>
            <th>Deliver</th>
          </tr>
        </thead>
        <tbody>
          {bags.map((bag, i) => {
            return (
              <BagRow
                deliverBag={deliverBag}
                pickupBag={pickupBag}
                selectedRow={selectedRow}
                key={i}
                bag={bag}
                // pickupBag={pickupBag}
                // selectCurrentBag={selectCurrentBag}
                handleSelectCurrentBag={handleSelectCurrentBag}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default BagTable;
