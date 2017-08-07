import React, { Component } from 'react';
import ClassifiedList from './components/ClassifiedList';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import ClassifiedDisplay from './components/ClassifiedDisplay';
import { Container } from 'reactstrap';
import ButtonBar from './components/ButtonBar';
import PostAdForm from './components/PostAdForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classifieds: [],
      selectedAd: {},
      showEditForm: false
    }
  }

  componentDidMount() {
    this.fetchAllAds();
  }

  async fetchAllAds() {
    const response = await fetch('http://localhost:8080/classifieds')
    const json = await response.json();
    this.setState({classifieds: json});
    this.selectAd(this.state.classifieds[0]);
  }

  toggleEditForm = () => {
    if(this.state.showEditForm){
      this.setState({showEditForm: false});
    } else {
      this.setState({showEditForm: true});
    }
  }

  selectAd = (ad) => {
    this.setState({selectedAd: ad});
  }

  addAd = (ad) => {
    console.log("saving ad");
    this.setState({classifieds: [...this.state.classifieds, ad]});
  }

  render() {
    return (
      <Container>
        <NavBar />
        {this.state.showEditForm &&
          <PostAdForm
            toggleEditForm = {this.toggleEditForm}
            addAd = {this.addAd}
          />}
        {!this.state.showEditForm &&
          <ClassifiedDisplay
            ad={this.state.selectedAd}
        />}
        <ButtonBar
          toggleEditForm = {this.toggleEditForm}
        />
        <ClassifiedList
          classifieds={this.state.classifieds}
          selectAd={this.selectAd}
        />
      </Container>
    );
  }
}

export default App;
