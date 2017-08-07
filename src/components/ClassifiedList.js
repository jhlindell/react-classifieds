import React, {Component} from 'react';
import ClassifiedAd from './ClassifiedAd';
import {Col, Row} from 'reactstrap';

class ClassifiedList extends Component {

  renderList() {
    if (!this.props.classifieds) {
      return <div>loading</div>
    }
    return this.props.classifieds.map((ad, i) => {
      return (<ClassifiedAd key={i} ad={ad} selectAd={this.props.selectAd}/>);
    });
  }

  render() {
    return (
      <Row className="listClassifieds">
        <Col xs="12">
          {this.renderList()}
        </Col>
      </Row>
    );
  }
}

export default ClassifiedList;
