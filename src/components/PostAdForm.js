import React, {Component} from 'react';

class PostAdForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: 0,
      item_image: '',
      description: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.postProperty(this.state);
  }

  render() {
    
  }
}

export default PostAdForm;
