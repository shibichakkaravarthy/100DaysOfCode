import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import Items from './Components/Items/Items';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 0,
      items: [],
      total: 0
    }
  }

  onItemAdd = (name, price) => {
    console.log(name, price);
  }


  render() {
    return (
      <div className="App">
        <Header />
        <div className='content'>
          <Products itemAdd={this.onItemAdd} id='Products'/>
          <Items />
        </div>

      </div>
    );
  }
}

export default App;
