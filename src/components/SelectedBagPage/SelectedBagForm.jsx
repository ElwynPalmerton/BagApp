import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Stack, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";

function SelectedBagForm({ selectedBag, pickupBag, closeForm, deliverBag }) {
  const [disableAdd, setDisabledAdd] = useState(false);
  const [disableDeliver, setDisableDeliver] = useState(false);

  useEffect(() => {
    if (selectedBag !== undefined) {
      setDisabledAdd(false);
      setDisableDeliver(true);
      if (selectedBag.currentTask === true) {
        setDisabledAdd(true);
        setDisableDeliver(false);
      }

      if (selectedBag.completed === true) {
        setDisableDeliver(true);
        setDisabledAdd(true);
      }
    }
  }, [selectedBag]);

  function handlePickupBag() {
    pickupBag(selectedBag.id);
    setDisabledAdd(true);
    setDisableDeliver(false);
  }

  function handleDeliverBag() {
    console.log("in BagForm ", selectedBag.id);
    deliverBag(selectedBag.id);
    setDisableDeliver(true);
  }

  return (
    <div>
      <br />
      <br />
      <br />

      {selectedBag !== undefined ? (
        <Container>
          {/* <h2>Selected Bag</h2> */}
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Bag Tag#: {selectedBag.bagtag}</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Location: {selectedBag.latitude}, {selectedBag.longitude}
                </ListGroup.Item>
                <ListGroup.Item>Source: {selectedBag.source}</ListGroup.Item>
                <ListGroup.Item>
                  Destination: {selectedBag.destination}
                </ListGroup.Item>
              </ListGroup>
              <br />
              {/* <div>
                <Stack direction="horizontal" gap={2}>
                  <Button
                    // onClick={() => pickupBag(selectedBag.bagId)}
                    onClick={handlePickupBag}
                    variant="outline-primary"
                    type="submit"
                    disabled={disableAdd}
                  >
                    Get Bag
                  </Button>

                  <Button
                    // onClick={() => {
                    //   deliverBag(selectedBag.bagId);
                    // }}
                    onClick={handleDeliverBag}
                    variant="primary"
                    type="submit"
                    disabled={disableDeliver}
                  >
                    Deliver
                  </Button>
                  <Button
                    onClick={closeForm}
                    // variant="primary-outline"
                    variant="sldfkjsdfoutline"
                    type="submit"
                  >
                    close
                  </Button>
                </Stack> */}
              {/* </div> */}
            </Card.Body>
          </Card>
        </Container>
      ) : null}
    </div>
  );
}

export default SelectedBagForm;
