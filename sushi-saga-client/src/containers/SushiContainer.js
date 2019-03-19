import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

export default class SushiContainer extends React.Component {
  state = {
    sushiList: [],
    num: 4
  }

  componentDidMount() {
    fetch('http://localhost:3000/sushis')
    .then(res => res.json())
    .then(sushiResponse => {
      this.setState({
        sushiList: sushiResponse
      })
    })
  }

  renderSushi = () => {
    let sushiToRender = [...this.state.sushiList].splice(0, this.state.num)
    return sushiToRender.map(sushi =>{
      return <Sushi sushi={sushi} updateMoney={this.props.updateMoney} eatSushi={this.props.eatSushi} ate={this.props.ate} money={this.props.money}/>
    })
  }

  renderMoreSushi = () => {
    let newNum = this.state.num + 4
    this.setState({
      num : newNum
    }, () => this.renderSushi())

  }


render () {
  return (
    <Fragment>
      <div className="belt">
        {this.renderSushi()}
        <MoreButton renderMoreSushi={this.renderMoreSushi} renderSushi={this.renderSushi} />
      </div>
    </Fragment>
  )
  }
}
