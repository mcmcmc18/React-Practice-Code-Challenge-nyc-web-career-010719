import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    money: 100,
  }

  // eatSushi = (sushi) => {
  //   let price = sushi.price
  //   let updatedMoney = this.state.money - price
  //   if (updatedMoney >= 0) {
  //     this.setState({
  //       money: updatedMoney,
  //     })
  //   }
  // }

  updateMoney = (sushi) => {
    let price = sushi.price
    let updatedMoney = this.state.money - price
    if (updatedMoney >= 0)
    this.setState({
      money: updatedMoney
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer updateMoney={this.updateMoney} eatSushi={this.eatSushi} ate={this.state.ate} money={this.state.money}/>
        <Table money={this.state.money}/>
      </div>
    );
  }
}

export default App;
