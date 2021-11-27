import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { ButtonGroup } from "react-bootstrap";
import { Stack, ListGroup } from "react-bootstrap";
import { useEffect } from "react";

function SelectedBagForm({ selectedBag, pickupBag, closeForm }) {
  // The function to selected the current bag needs to be passed down to this.
  //FROM: BagDisplayPage (app.js doesn't need to know this.)
  // The method to complete a task needs to be written in app and passed down to here.
  //FROM: app.js - modifies the array of bags.

  function handleCompleteTask() {}

  useEffect(() => {
    if (selectedBag !== undefined) {
      console.log("Selected bag inside Selected Bag Form: ", selectedBag.bagId);
      console.log("Selected bag inside Selected Bag Form: ", selectedBag);
    }
  }, [selectedBag]);

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
              <Card.Title>Bag Tag: {selectedBag.bagId}</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Location: {selectedBag.location}
                </ListGroup.Item>
                <ListGroup.Item>Source: {selectedBag.source}</ListGroup.Item>
                <ListGroup.Item>
                  Destination: {selectedBag.destination}
                </ListGroup.Item>
              </ListGroup>
              <br />
              <div>
                <Stack direction="horizontal" gap={2}>
                  <Button
                    onClick={() => pickupBag(selectedBag.bagId)}
                    variant="light"
                    type="submit"
                  >
                    Add
                  </Button>
                  <Button variant="light" type="submit">
                    Deliver
                  </Button>
                  <Button
                    onClick={closeForm}
                    variant="outline-secondary"
                    type="submit"
                  >
                    close
                  </Button>
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Container>
      ) : null}
    </div>
  );
}

export default SelectedBagForm;
