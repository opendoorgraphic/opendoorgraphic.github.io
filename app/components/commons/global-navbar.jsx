import 'styles/commons/global-navbar.scss';

import { Component } from 'react';
import { Link } from 'react-router';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class GlobalNavbar extends Component {
  render () {
    return (
      <Navbar id="global-navbar" fixed>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <i className="icon-logo"/>
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <IndexLinkContainer to="/">
              <NavItem>home</NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/about">
              <NavItem>about</NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/contact">
              <NavItem>contact</NavItem>
            </IndexLinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
