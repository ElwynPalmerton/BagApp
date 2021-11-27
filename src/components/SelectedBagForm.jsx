import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function SelectedBagForm({ selectedBag }) {
  // The function to selected the current bag needs to be passed down to this.
  // The method to complete a task needs to be written in app and passed down to here.

  function handleCompleteTask() {}

  return (
    // <ThreeColumnLayout>
    <Container>
      <Form onSubmit={() => {}}>
        <Button variant="primary" type="submit">
          Add Bag
        </Button>
        <Button variant="primary" type="submit">
          Add Bag
        </Button>
      </Form>
    </Container>
    // </ThreeColumnLayout>
  );
}

export default SelectedBagForm;

// I need to get the current selected bag from the table first.

// I. Add Select Task
// 	1. Create SelectedBagForm.
// 		— “selectedBag” needs to be passed in.
// 		— Modify selectedBag.
// 			— Select &
// 			— Complete Task.
// 				(Can only complete it if it’s
// 				  currently selected.)
