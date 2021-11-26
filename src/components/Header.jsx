import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <div>
      <Navbar className="navBar" bg="dark" variant="dark">
        {/* <Navbar className="navBar"> */}
        <Container>
          <Navbar.Brand className="headerFont" href="#home">
            {/* <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "} */}
            UAL Uber POC
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

export default Header;
