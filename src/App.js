import React, { Component } from 'react';
import ClassifiedList from './components/ClassifiedList';
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
      showEditForm: false,
      populateEditForm: false,
      buttonBarToggle: true,
      sortByAscending: true
    }
  }

  componentDidMount() {
    this.fetchAllAds();
  }

  async fetchAllAds() {
    const response = await fetch('http://localhost:8080/classifieds')
    const json = await response.json();
    this.setState({classifieds: json});
    this.sortAds();
    this.selectAd(this.state.classifieds[0]);
  }

  async postAdToServer(ad){
    const response = await fetch('http://localhost:8080/classifieds', {
      method: 'POST',
      body: JSON.stringify(ad),
      headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
    });
    const returnedAd = await response.json();
    this.setState({classifieds: [...this.state.classifieds, returnedAd]});
    this.fetchAllAds();
  }

  async patchAdToServer(ad){
    await fetch('http://localhost:8080/classifieds/' + ad.id, {
      method: 'PATCH',
      body: JSON.stringify(ad),
      headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
    });
    this.fetchAllAds();
  }

  async deleteAdFromServer(){
    await fetch('http://localhost:8080/classifieds/' + this.state.selectedAd.id, {
      method: 'DELETE'
    });
    this.fetchAllAds();
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
    this.postAdToServer(ad);
  }

  editAd = (ad) => {
    this.patchAdToServer(ad);
    this.setState({populateEditForm: false});
  }

  postAdButton = () => {
    this.toggleButtonBar();
    this.toggleEditForm();
  }

  editAdButton = () => {
    this.toggleButtonBar();
    this.setState({populateEditForm: true});
    this.toggleEditForm();
  }

  deleteAdButton = () => {
    this.deleteAdFromServer();
  }

  toggleButtonBar = () => {
    if(this.state.buttonBarToggle){
      this.setState({buttonBarToggle: false});
    } else {
      this.setState({buttonBarToggle: true});
    }
  }

  sortAds(){
    let ads = this.state.classifieds;
    if(this.state.sortByAscending){
      ads.sort(function(a,b){
        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        if (titleA < titleB){
          return -1;
        }
        if (titleA > titleB){
          return 1;
        }
        return 0;
      });
    } else {
      ads.sort(function(a,b){
        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        if (titleA > titleB){
          return -1;
        }
        if (titleA < titleB){
          return 1;
        }
        return 0;
      });
    }
    this.setState({classifieds: ads});
  }

  sortByAscButton = () => {
    this.setState({sortByAscending: true}, this.sortAds);
  }

  sortByDescButton = () => {
    this.setState({sortByAscending: false}, this.sortAds);
  }

  render() {
    return (
      <Container>
        <NavBar />
        {this.state.showEditForm &&
          <PostAdForm
            ad = {this.state.selectedAd}
            toggleEditForm = {this.toggleEditForm}
            toggleButtonBar = {this.toggleButtonBar}
            addAd = {this.addAd}
            editAd = {this.editAd}
            populateEditForm = {this.state.populateEditForm}
          />}
        {!this.state.showEditForm &&
          <ClassifiedDisplay
            ad={this.state.selectedAd}
        />}
        {this.state.buttonBarToggle &&
          <ButtonBar
            sortByAscButton = {this.sortByAscButton}
            sortByDescButton = {this.sortByDescButton}
            postAdButton = {this.postAdButton}
            editAdButton = {this.editAdButton}
            deleteAdButton = {this.deleteAdButton}
          />}
        <ClassifiedList
          classifieds={this.state.classifieds}
          selectAd={this.selectAd}
        />
      </Container>
    );
  }
}

export default App;
