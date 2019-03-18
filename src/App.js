import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import Items from './Components/Items/Items';
import Enterlist from './Components/Enterlist/Enterlist';
import Inventory from './Components/Inventory/Inventory';
import Cart from './Components/Cart/Cart';
import AddProduct from './Components/AddProduct/AddProduct';
import Expense from './Components/Expense/Expense';
import Signin from './Components/Signin Register/Signin';
import {
      PopupboxManager,
      PopupboxContainer
    } from 'react-popupbox';
import Dashboard from './Components/Dashboard/Dashboard'
import StockEntry from './Components/Inventory/StockEntry'
import './Components/react-popupbox.css'
import './App.css';

const initialState = {
  date: 0,
  items:[],
  total: 0,
  route: 'home',
  products: []
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 0,
      items: [],
      total: 0,
      route: 'home',
      products: [],
      bill: 0,
      usertype: 'admin'
    };
  }

  onItemAdd = (name, price, inven) => {
    let quantity = parseInt(prompt("Quantity", 1)); 
    const itm = this.state.items;

    console.log('1 success');

    if(itm.length !== 0) {
	    console.log('2 success');
    	for(var i = 0; i < itm.length; i++) {
	    	if(name === itm[i].name) {
    console.log('3 success');

	    	itm[i].quantity =parseInt(quantity+itm[i].quantity);
	    	itm[i].amount = itm[i].quantity * price;
        itm[i].inven = inven;
	    	this.setState({items: itm});
	    	break;
	    	}

	    	else {
    console.log('4 success');

	    		this.setState({
				      items: this.state.items.concat({name: name, price: price, quantity: quantity, amount: price*quantity, inven: inven}),
				})
	    	}
    	}
    }

    else {
    	this.setState({
				      items: this.state.items.concat({name: name, price: price, quantity: quantity, amount: price*quantity, inven: inven}),
				})
    }
  }

  popupClose = () => {
    this.onRouting('home');
    this.setState({items: []});
  }

  openPopupbox() {
            const content = (
              <div>
                <div style={{textAlign: 'center', color: 'green'}}>SUCCESS!</div>
                <div>{`Your Order No in ${this.state.bill}`}</div>
              </div>
            )

            PopupboxManager.open({ 
              content,
              config: {
                titleBar: {
                  className: 'SUCCESS',
                  enable: true,
                  text: 'Success',
                  closeButton: true
                },
                escClose: true,
                overlayClose: true,
                onClosed: () => {this.popupClose()}
              } 
            })
          }

  onSaving = () => {
    fetch('http://localhost:3000/billed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: this.state.items,
        total: this.state.total,
        date: new Date()
      })
    })
    .then(response => response.json())
      .then(data => {
        if(data.status === 'success') {
          console.log(data.billno[0])
          this.setState({
            bill: data.billno[0]
          })
          console.log(this.state.bill)
          this.openPopupbox();
        }
      })
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
        items: items
      })


    }
  }

  quantityChange = (i,event) => {
    console.log(i);
    let listItems = this.state.items;
    listItems[i-1].quantity = event.target.value;
    listItems[i-1].amount = listItems[i-1].price * event.target.value;
    console.log(listItems);

    this.setState({
      items: listItems,
    })

  }



  componentWillMount() {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => {
        this.setState({products: data})
        console.log(data);
       })
  }

  componentDidUpdate (previousProps, previousState) {
    let listItems = this.state.items;
    let total = 0;

    listItems.map(obj => {
      total = total + obj.amount;
      return(total);
    })

    if(total !== this.state.total) {
      this.setState({
        total: total
      })
    }

    console.log(this.state.items);

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
        <div className="App">
          <Header onRouting={this.onRouting} />
          <Inventory product = {this.state.products} onRouting={this.onRouting} />
        </div>
      );
    }

    else if(this.state.route === 'cart') {
    	return(
        <div className="App">
          <Header onRouting={this.onRouting} />
          <Cart items = {this.state.items} total = {this.state.total} onSaving = {this.onSaving}/>
        </div>
      );
    }

    else if(this.state.route === 'addprod') {
      return(
        <div className="App">
          <Header onRouting = {this.onRouting} />
          <AddProduct />
        </div>
      );
    }

    else if(this.state.route === 'exp') {
      return(
        <div className="App">
          <Header onRouting = {this.onRouting} />
          <Expense />
        </div>
      );
    }

    else if(this.state.route === 'signin') {
      return(
        <div className="App">
          <Header onRouting = {this.onRouting} />
          <Signin />
        </div>
      );
    }

    else if(this.state.route === 'dash') {
      return(
        <div className="App">
          <Header onRouting = {this.onRouting} />
          <Dashboard />
        </div>
      );
    }

    else if(this.state.route === 'stockentry') {
      return(
        <div className="App">
          <Header onRouting = {this.onRouting} />
          <StockEntry />
        </div>
      );
    }
  }
}

export default App;
