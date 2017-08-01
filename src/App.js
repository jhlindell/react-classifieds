import React, { Component } from 'react';
import ClassifiedList from './components/ClassifiedList';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';

class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Route path="/"  component={NavBar} />
          <Route path="/"  component={ClassifiedList} />
        </div>
    </Router>
    );
  }
}

export default App;
