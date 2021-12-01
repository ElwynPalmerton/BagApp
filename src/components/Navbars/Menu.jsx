import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import { Stack, Row, Col, Nav, NavItem, Button } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import React, { useState, useEffect } from "react";

function Menu({ user, loggedIn, handleLogOut }) {
  const [onLoginPage, setOnLoginPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/login"
      ? setOnLoginPage(true)
      : setOnLoginPage(false);
  }, [location]);

  return (
    <div>
      {/* {loggedIn ? ( */}
      <div>
        <Navbar bg="light" className="justify-content-end">
          <Container className="justify-content-end">
            <Nav>
              <NavItem eventkey={2} href="/bags">
                <Nav.Link as={Link} to="/bags">
                  View Bags
                </Nav.Link>
              </NavItem>
              <NavItem eventkey={2}>
                <Nav.Link>|</Nav.Link>
              </NavItem>

              <NavItem eventkey={3} href="/addbag">
                <Nav.Link as={Link} to="/addbag">
                  Add Bag
                </Nav.Link>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
      {/* ) : null} */}

      <br />
    </div>
  );
}

export default Menu;