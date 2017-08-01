import React, { Component } from 'react';
import ClassifiedList from './components/ClassifiedList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Galvanize Classifieds</h1>
        <ClassifiedList />
      </div>
    );
  }
}

export default App;
