import React, { Fragment } from 'react'

export default class Table extends React.Component {


   renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  render () {

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${this.props.money} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {this.renderPlates([])}
        </div>
      </div>
    </Fragment>
  )
}
}
