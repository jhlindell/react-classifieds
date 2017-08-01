import React, {Component} from 'react';

class ClassifiedAd extends Component {
  render() {
    return (
      <div>
        {this.props.ad.title}
      </div>
    )
  }
}

export default ClassifiedAd;
