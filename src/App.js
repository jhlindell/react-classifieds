import React, { Component } from 'react';
import ClassifiedList from './components/ClassifiedList';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import ClassifiedDisplay from './components/ClassifiedDisplay';
import { Container } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classifieds: [
        {
          id: 1,
          title: 'NES Classic',
          description: 'I got lucky and found it, and decided to charge 10x what it was worth.',
          price: 600,
          item_image: 'http://www.nintendo.com/images/page/nes-classic/nes-classic-edition-box.png',
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        }, {
          id: 2,
          title: 'Pikachu 9" Plush Stuffed Toy',
          description: 'Polyester fiber construction Officially licensed.',
          price: 10,
          item_image: 'https://images-na.ssl-images-amazon.com/images/I/41VwGotRZsL._SY300_.jpg',
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        }
      ],
      selectedProperty: {
        id: 2,
        title: 'Pikachu 9" Plush Stuffed Toy',
        description: 'Polyester fiber construction Officially licensed.',
        price: 10,
        item_image: 'https://images-na.ssl-images-amazon.com/images/I/41VwGotRZsL._SY300_.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }
    }
  }

  selectProperty = (ad) => {
    this.setState({selectedProperty: ad});
  }

  render() {
    return (
      <Router>
        <Container>
          <div>
            <Route path="/" component={NavBar}/>
            <Route path="/" component={() => <ClassifiedDisplay ad={this.state.selectedProperty}/>}/>
            <Route path="/" component={() => <ClassifiedList classifieds={this.state.classifieds} selectProperty={this.selectProperty}/>}/>
          </div>
        </Container>
      </Router>
    );
  }
}

export default App;
