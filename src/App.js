import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import Items from './Components/Items/Items';
import Enterlist from './Components/Enterlist/Enterlist';
import Inventory from './Components/Inventory/Inventory';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 0,
      items: [],
      total: 0,
      route: 'inven'
    }
  }

  onItemAdd = (name, price) => {
    let quantity = 1;
    this.setState({
      items: this.state.items.concat({name: name, price: price, quantity: quantity, amount: price*quantity}),
      total: this.state.total + price*quantity
    })
  }

  componentDidUpdate() {
    console.log(this.state.total);
  }


  render() {
    if (this.state.route === 'home') {
      return (
        <div className="App">
          <Header />
          <div className='content'>
            <Products id='Products' onItemAdd={ this.onItemAdd }/>
            <div id='enterlist'>
              <Items/>
              <div id='bind'>
                {
                  this.state.items.map((obj,i) => {
                  return( 
                    <Enterlist name = {this.state.items[i].name} i={i+1} price = {this.state.items[i].price} quantity = {this.state.items[i].quantity} amount = {this.state.items[i].amount} key={i} total = {this.state.total}/>
                  ); 
                  })
                }
              </div>
            </div>
          </div>
        </div>
      );
    }

    else if(this.state.route === 'inven') {
      return(
        <div>
          <Header />
          <Inventory />
        </div>
      );
    }
  }
}

export default App;
