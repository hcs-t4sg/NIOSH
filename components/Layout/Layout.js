import React from 'react';
import Head from 'next/head';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
const Layout = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Navbar color="faded" light>
          <NavbarBrand href="/" style={{marginLeft: '20px'}}>
            <h4 className='title'>{props.pageTitle}</h4>
            {/* <title>{props.pageTitle}</title>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            /> */}
          </NavbarBrand>
          <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} style={{marginRight: '20px'}} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" style={{marginLeft: '20px'}} navbar>
              <NavItem>
                <NavLink href="/comparison-page">Compare</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/predict-page">Predict</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      <div>
        {props.children}
      </div>
    </div>
  )
}
export default Layout;