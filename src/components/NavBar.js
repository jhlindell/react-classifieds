import React from "react";
import { Navbar, NavbarBrand, Row} from 'reactstrap';

class NavBar extends React.Component {
  render(){
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
