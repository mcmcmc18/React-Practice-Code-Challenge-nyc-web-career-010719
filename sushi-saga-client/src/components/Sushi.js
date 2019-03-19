import React, { Fragment } from 'react'

export default class Sushi extends React.Component {
//Below Works but now i need to bring it up to app in order to not make the image disappear when no money is left
  state = {
    ate: false
  }

eatSushi = () => {
  if (this.props.money >= 0) {
  this.setState({
    ate: true
  }, () => this.props.updateMoney(this.props.sushi))
}
}

render () {
  return (
    <div className="sushi">s
      <div className="plate"
           onClick={() => this.eatSushi(this.state.sushi)}>
        {
          (this.state.ate === true) ? null : <img src={this.props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
    )
  }
}
