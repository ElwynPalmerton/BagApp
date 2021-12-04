import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import { Nav, NavItem, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import UnitedLogo from "../images/UnitedLogo.svg";

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
      <Navbar variant="dark" className="NavCustom">
        <Container>
          <img
            // src="../images/UnitedLog.svg"
            src={UnitedLogo}
            // width="30"
            // height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <Navbar.Brand href="#home">UAL Uber POC</Navbar.Brand>

          <Nav>
            {!loggedIn ? (
              onLoginPage === false ? (
                <NavItem eventkey={4} href="/login">
                  <Nav.Link className="navFont" as={Link} to="/login">
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
