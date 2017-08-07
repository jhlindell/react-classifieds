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
          <Button className="button"
            onClick={this.props.postAdButton}>Post New Ad</Button>
          <Button className="button"
            onClick={this.props.editAdButton}>Edit Ad</Button>
          <Button className="button"
            onClick={this.props.deleteAdButton}>Delete Ad</Button>
          <Button className="button"
            onClick={this.props.sortByAscButton}>Sort By Asc</Button>
          <Button className="button"
            onClick={this.props.sortByDescButton}>Sort By Desc</Button>
        </Col>
      </Row>
    );
  }
}

export default ButtonBar;
