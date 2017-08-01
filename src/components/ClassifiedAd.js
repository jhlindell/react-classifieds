import React, {Component} from 'react';
import { Card,CardText, CardBlock,
  CardTitle, Col } from 'reactstrap';

class ClassifiedAd extends Component {
  render() {
    return (
      <div>
        <Col xs="12" className="ClassifiedCard">
          <Card>
            <CardBlock className="cardTitle">
              <CardTitle classname="titleText">
                {this.props.ad.title}
              </CardTitle>
              <CardText>
                {this.props.ad.description}
              </CardText>
            </CardBlock>
          </Card>
        </Col>
      </div>
    );
  }
}

export default ClassifiedAd;
