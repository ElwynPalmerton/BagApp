import React from "react";
import Table from "react-bootstrap/Table";
import BagRow from "./BagRow";

function BagTable({ bags, pickupBag = () => {}, selectCurrentBag = () => {} }) {
  //You can't select a bag from the  AddBagPage.
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
                key={i}
                bag={bag}
                // pickupBag={pickupBag}
                selectCurrentBag={selectCurrentBag}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default BagTable;
