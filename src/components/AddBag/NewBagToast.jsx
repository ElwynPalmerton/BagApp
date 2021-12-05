import { Toast, ToastContainer } from "react-bootstrap";

function NewBagToast({ newBag, showToast, toggleShowToast }) {
  //   useEffect(() => {}, showToast);

  return (
    <ToastContainer className="Overlay" position="top-center">
      <Toast
        show={showToast}
        onClose={toggleShowToast}
        delay={10000}
        autohide
        bg="info"
        //   className="Overlay"
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />

          <strong className="me-auto">New Bag Alert</strong>
          <small>Just now</small>
        </Toast.Header>
        {newBag !== undefined ? (
          <Toast.Body>
            Bag Tag: {newBag.bagId} - Source: {newBag.source} Destination:{" "}
            {newBag.destination}
            {/* {newBag} */}
          </Toast.Body>
        ) : null}
      </Toast>
    </ToastContainer>
  );
}

export default NewBagToast;
