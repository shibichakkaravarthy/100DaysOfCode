import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import Items from './Components/Items/Items';
import Enterlist from './Components/Enterlist/Enterlist';
import Inventory from './Components/Inventory/Inventory';
import Cart from './Components/Cart/Cart';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 0,
      items: [],
      total: 0,
      route: 'home',
      products: [],
    }
  }

  onItemAdd = (name, price) => {
    let quantity = parseInt(prompt("Quantity", 1)); 
    const itm = this.state.items;

    console.log('1 success');

    if(itm.length !== 0) {
	    console.log('2 success');
    	for(var i = 0; i < itm.length; i++) {
	    	if(name === itm[i].name) {
    console.log('3 success');

	    	itm[i].quantity = quantity+itm[i].quantity;
	    	itm[i].amount = itm[i].quantity * price;
	    	this.setState({items: itm});
	    	break;
	    	}

	    	else {
    console.log('4 success');

	    		this.setState({
				      items: this.state.items.concat({name: name, price: price, quantity: quantity, amount: price*quantity}),
				      total: this.state.total + price*quantity
				})
	    	}
    	}
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
    if(items[i].quantity === 1){
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



  componentDidMount() {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(data => {
        this.setState({products: data})
      })
  }


  render() {
    if (this.state.route === 'home') {
      return (
        <div className="App">
          <Header onRouting={this.onRouting}/>
          <div className='content'>
            <Products id='Products' onItemAdd={ this.onItemAdd } product={this.state.products}/>
            <div id='enterlist'>
              <Items/>
              <div id='bind'>
                {
                  this.state.items.map((obj,i) => {
                  return( 
                    <Enterlist removeEntry={this.removeEntry} onRouting={this.onRouting} quantityChange={this.quantityChange} name = {this.state.items[i].name} i={i+1} price = {this.state.items[i].price} quantity = {this.state.items[i].quantity} amount = {this.state.items[i].amount} key={i} total = {this.state.total}/>
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
          <Inventory product = {this.state.products}/>
        </div>
      );
    }

    else if(this.state.route === 'cart') {
    	return(
        <div>
          <Header onRouting={this.onRouting} />
          <Cart items = {this.state.items} total = {this.state.total} onRouting = {this.onRouting}/>
        </div>
      );
    }
  }
}

export default App;
