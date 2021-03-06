import React, {Component} from 'react';
import {
  Card,
  CardText,
  CardBlock,
  CardTitle,
  Col,
  Media,
  Row
} from 'reactstrap';

class ClassifiedDisplay extends Component {
  render() {
    return (
      <Row className="classifiedDisplay">
        <Col xs="12">
        <Card>
          <Media>
          <Media left>
            <img className="displayImage" src={this.props.ad.item_image} alt="something should go here"/>
          </Media>
          <Media body>
            <CardBlock>
              <CardTitle>
                {this.props.ad.title}
              </CardTitle>
              <CardText>
                {this.props.ad.description}
              </CardText>
              <CardText>
                Price: {this.props.ad.price}
              </CardText>
            </CardBlock>
          </Media>
          </Media>
        </Card>
      </Col>
      </Row>
    );
  }
}

export default ClassifiedDisplay;
