import React from "react";
import Table from "react-bootstrap/Table";
import BagRow from "./BagRow";
import { useState, useEffect } from "react";

function BagTable({ bags, pickupBag = () => {}, selectCurrentBag = () => {} }) {
  const [selectedRow, setSelectedRow] = useState();

  function handleSelectCurrentBag(bagID) {
    setSelectedRow(bagID);
    selectCurrentBag(bagID);
  }

  useEffect(() => {
    console.log("SelectedRow: ", selectedRow);
  });

  return (
    <div>
      <h1>Bags</h1>
      <Table bordered>
        <thead>
          <tr>
            <th>Bag Tag</th>
            <th>Source</th>
            <th>Location</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          {bags.map((bag, i) => {
            return (
              <BagRow
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
