import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import { Stack, Nav, NavItem, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function Header({ user, loggedIn, handleLogOut }) {
  const [onLoginPage, setOnLoginPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/login"
      ? setOnLoginPage(true)
      : setOnLoginPage(false);
  }, [location]);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        {/* <Navbar className="navBar"> */}
        <Container>
          <Navbar.Brand className="headerFont" href="#home">
            {/* <img
              alt=""
              src="../../public/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> */}
            UAL Uber POC
          </Navbar.Brand>

          <Nav>
            {loggedIn ? (
              <React.Fragment>
                <NavItem eventkey={2} href="/bags">
                  <Nav.Link as={Link} to="/bags">
                    View Bags
                  </Nav.Link>
                </NavItem>

                <NavItem eventkey={3} href="/addbag">
                  <Nav.Link as={Link} to="/addbag">
                    Add Bag
                  </Nav.Link>
                </NavItem>
              </React.Fragment>
            ) : null}

            {!loggedIn ? (
              onLoginPage === false ? (
                <NavItem eventkey={4} href="/login">
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                </NavItem>
              ) : null
            ) : (
              <React.Fragment>
                <NavItem>
                  <Nav.Link>Hello {user.name}</Nav.Link>
                </NavItem>
                <Button onClick={handleLogOut} variant="dark">
                  log out
                </Button>
              </React.Fragment>
            )}
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

export default Header;
