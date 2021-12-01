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
      <Navbar bg="dark" variant="dark" className="NavCustom">
        <Container>
          <Navbar.Brand className="headerFont" href="#home">
            UAL Uber POC
          </Navbar.Brand>

          <Nav>
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
                  <Nav.Link style={{ color: "white" }}>
                    Hello {user.name}
                  </Nav.Link>
                </NavItem>
                <Button
                  onClick={handleLogOut}
                  variant="dark"
                  style={{ color: "grey" }}
                >
                  Log out
                </Button>
              </React.Fragment>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
