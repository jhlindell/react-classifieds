import React, {Component} from 'react';
import { Button, Row } from 'reactstrap';

class ButtonBar extends Component {
  render() {
    return (
      <Row className="buttonBar">
        <Button>Post New Ad</Button>
        <Button>Edit Ad</Button>
      </Row>
    );
  }
}

export default ButtonBar;
