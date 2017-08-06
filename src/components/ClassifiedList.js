import React, {Component} from 'react';
import ClassifiedAd from './ClassifiedAd';
import {Row} from 'reactstrap';

class ClassifiedList extends Component {

  renderList() {
    if (!this.props.classifieds) {
      console.log(this.props);
      return <div>loading</div>
    }
    return this.props.classifieds.map((ad, i) => {
      return (<ClassifiedAd key={i} ad={ad} selectProperty={this.props.selectProperty}/>);
    });
  }

  render() {
    return (
      <Row className="listClassifieds">
        <div>
          {this.renderList()}
        </div>
      </Row>
    );
  }
}

export default ClassifiedList;
