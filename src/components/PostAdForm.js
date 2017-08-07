import React, {Component} from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Row
} from 'reactstrap';

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
    let ad = this.state;
    this.props.addAd(ad);
    this.setState({
      title: '',
      price: 0,
      item_image: '',
      description: ''
    });
    this.props.toggleEditForm();
  }

  onCancel(event){
    event.preventDefault();
    this.setState({
      title: '',
      price: 0,
      item_image: '',
      description: ''
    });
    this.props.toggleEditForm();
  }

  render() {
    return (
      <Row className="editForm">
        <Col xs={{
          size: 10,
          offset: 1
        }}>
        <Form>
          <FormGroup row>
            <Label for="title" sm={3}>Title</Label>
            <Col xs={9}>
              <Input className="adFormInput" type="text" name="title" onChange={(e) => {
                this.handleInputChange(e)
              }} value={this.state.title} placeholder=""/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="price" sm={3}>Price</Label>
            <Col xs={9}>
              <Input className="adFormInput" type="number" name="price" onChange={(e) => {
                this.handleInputChange(e)
              }} value={this.state.price} placeholder=""/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="item_image" sm={3}>Item Image Url</Label>
            <Col xs={9}>
              <Input className="adFormInput" type="text" name="item_image" onChange={(e) => {
                this.handleInputChange(e)
              }} value={this.state.item_image} placeholder=""/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="description" sm={3}>Description</Label>
            <Col xs={9}>
              <Input className="adFormInput" type="text" name="description" onChange={(e) => {
                this.handleInputChange(e)
              }} value={this.state.description} placeholder=""/>
            </Col>
          </FormGroup>
          <Button onClick={(e) => {this.onFormSubmit(e)}}>Post Ad</Button>
          <Button onClick={(e) => {this.onCancel(e)}}>Cancel</Button>
        </Form>
        </Col>
      </Row>
    )
  }
}

export default PostAdForm;
