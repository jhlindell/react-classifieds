import React, {Component} from 'react';
import { Col, Button, Row } from 'reactstrap';

class ButtonBar extends Component {
  render() {
    return (
      <Row className="buttonBar">
        <Col xs={{
          size: 10,
          offset: 1
        }}>
        <Button onClick={this.props.toggleEditForm}>Post New Ad</Button>
        <Button onClick={this.props.editAdButton}>Edit Ad</Button>
        </Col>
      </Row>
    );
  }
}

export default ButtonBar;
