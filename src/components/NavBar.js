import React from "react";
import {
  Navbar,
  NavbarBrand,
  Row
  } from 'reactstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Row>
        <Navbar color="faded" light toggleable className="fixed-top navBarFixed">
          <NavbarBrand>
            Galvanize Classifieds
          </NavbarBrand>
        </Navbar>
      </Row>
    );
  }
}

export default NavBar;
