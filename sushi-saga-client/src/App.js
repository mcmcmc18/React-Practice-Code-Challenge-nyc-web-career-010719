import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './containers/Form';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    allSushis: [],
    fourSushis: [],
    startIndex: 0,
    endIndex: 4,
    money: 100,
    emptyPlates: [],
    eatenSushi: [],
    addedMoney: 0
  }

  componentDidMount(){
    fetch(API)
      .then(res => res.json())
      .then(resSushis => {
        this.setState({
          allSushis: resSushis,
          fourSushis: resSushis.slice(0,4)
        }, () => console.log(this.state.fourSushis))
      })
    }

    renderMoreSushi = () => {
      if (this.state.endIndex >= this.state.allSushis.length){
        this.setState({
          startIndex: 0,
          endIndex: 4
        })
      } else {
        this.setState({
          startIndex: this.state.startIndex + 4,
          endIndex: this.state.endIndex + 4
        }, () => this.finishRenderMoreSushi())
      }
    }

    finishRenderMoreSushi = () => {
      let fourMoreSushis = [...this.state.allSushis]
      this.setState({
        fourSushis: fourMoreSushis.slice(this.state.startIndex, this.state.endIndex)
      }, console.log(this.state.eatenSushi))
    }

    canIEatSushi = (id) => {
      let sushiToEat = this.state.allSushis.find(sushi => sushi.id === id)
      if (this.state.money > sushiToEat.price) {
        let addEmptyPlates = [...this.state.emptyPlates, 1]
        let addEatenSushi = [...this.state.eatenSushi, sushiToEat]
        this.setState({
          money: this.state.money - sushiToEat.price,
          emptyPlates: addEmptyPlates,
          eatenSushi: addEatenSushi
        })
      }
    }

    handleChange = (event) => {
      this.setState({
        addedMoney: event.target.value
      })
    }

    addMoneyToWallet = (event) => {
      event.preventDefault();
      let newWallet = parseInt(this.state.money) + parseInt(this.state.addedMoney)
      this.setState({
        money: newWallet
      })
    }


  render() {
    return (
      <div className="app">
        <SushiContainer
        allSushis={this.state.allSushis}
        fourSushis={this.state.fourSushis}
        renderMoreSushi={this.renderMoreSushi}
        money={this.state.money}
        canIEatSushi={this.canIEatSushi}
        eatenSushi={this.state.eatenSushi}
        />
        <Table
        money={this.state.money}
        emptyPlates={this.state.emptyPlates}
        />
        <Form addMoneyToWallet={this.addMoneyToWallet}
        addedMoney={this.state.addedMoney}
        handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
