import React from "react";
import Head from "next/head";
import Navbar from "react-bootstrap/Navbar";
import { NavBar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import { Container } from "reactstrap";
import {
  AmplifyAuthenticator,
  withAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from "@aws-amplify/ui-react";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">NIOSH CDC App Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Compare Labs</Nav.Link>
                <Nav.Link href="/predictions">Predictions</Nav.Link>
              </Nav>
              <Nav>
                <AmplifySignOut />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {props.children}
      </div>
    </div>
  );
};
export default Layout;
