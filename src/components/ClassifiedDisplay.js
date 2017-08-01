import React, {Component} from 'react';
import { Card, CardText, CardBlock,
  CardTitle, Col, Row } from 'reactstrap';

class ClassifiedDisplay extends Component {
  render(){
    return (
      <Row className="classifiedDisplay">
        <Col xs="12">
          <Card>
            <img className="displayImage" src={this.props.ad.item_image} alt="item picture should go here" />
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
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ClassifiedDisplay;
