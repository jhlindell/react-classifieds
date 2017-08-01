import React, {Component} from 'react';
import { Card,CardText, CardBlock,
  CardTitle, Col } from 'reactstrap';

class ClassifiedAd extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Col xs="12" className="ClassifiedCard">
          <Card onClick={() => this.props.selectProperty(this.props.ad)}>
            <CardBlock className="cardTitle">
              <CardTitle className="titleText">
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
