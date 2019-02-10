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
      route: 'home'
    }
  }

  onItemAdd = (name, price) => {
    let quantity = prompt("Quantity", 1);
    if(this.state.items.length > 0){
      this.state.items.map((obj, i) => {
         if(this.state.items[i].name !== name)
         {
            console.log('new');
            this.setState({
              items: this.state.items.concat({name: name, price: price, quantity: quantity, amount: price*quantity}),
              total: this.state.total + price*quantity
            })
         }

          else 
          {
            console.log(this.state.items);
          }
      })
    }

    else {
      this.setState({
          items: this.state.items.concat({name: name, price: price, quantity: quantity, amount: price*quantity}),
          total: this.state.total + price*quantity
        })
    }
  }

  onRouting = (route) => {
    this.setState({route: route})
  }

  removeEntry = (i) => {
    var items = this.state.items;
    if(items === 1){
      items.splice(i,1);
      this.setState({items: items})
    }

    else {
      var it = this.state.items[i];
      it.quantity = it.quantity-1;
      it.amount = it.quantity * it.price;
      items.splice(i,1,it);
      this.setState({
        items: items,
        total: this.state.total - it.price
      })


    }
  }

  quantityChange = (i) => {
    console.log(i);
  }



  componentDidUpdate() {
    console.log(this.state.items);
  }


  render() {
    if (this.state.route === 'home') {
      return (
        <div className="App">
          <Header onRouting={this.onRouting}/>
          <div className='content'>
            <Products id='Products' onItemAdd={ this.onItemAdd }/>
            <div id='enterlist'>
              <Items/>
              <div id='bind'>
                {
                  this.state.items.map((obj,i) => {
                  return( 
                    <Enterlist removeEntry={this.removeEntry} quantityChange={this.quantityChange} name = {this.state.items[i].name} i={i+1} price = {this.state.items[i].price} quantity = {this.state.items[i].quantity} amount = {this.state.items[i].amount} key={i} total = {this.state.total}/>
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
          <Header onRouting={this.onRouting} />
          <Inventory />
        </div>
      );
    }
  }
}

export default App;
