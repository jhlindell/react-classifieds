import React from "react";
import { Navbar, NavbarBrand} from 'reactstrap';

class NavBar extends React.Component {
  render(){
    return (
      <div>
        <Navbar color="faded" light toggleable className="fixed-top navBarFixed">
          <NavbarBrand>
            Galvanize Classifieds
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
