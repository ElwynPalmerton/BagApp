import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "react-bootstrap";

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

          <Nav className="me-auto">
            <NavItem eventkey={1} href="/">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </NavItem>

            <NavItem eventkey={4} href="/login">
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </NavItem>

            <NavItem eventkey={2} href="/bags">
              <Nav.Link as={Link} to="/bags">
                Bags
              </Nav.Link>
            </NavItem>

            <NavItem eventkey={3} href="/addbag">
              <Nav.Link as={Link} to="/addbag">
                Add Bag
              </Nav.Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

export default Header;
