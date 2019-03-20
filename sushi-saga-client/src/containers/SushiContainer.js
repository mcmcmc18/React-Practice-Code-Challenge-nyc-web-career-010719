import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const renderSushi = (props) => {
  return props.fourSushis.map(sushi => {
    return <Sushi sushi={sushi}
      canIEatSushi={props.canIEatSushi}
      eatenSushi={props.eatenSushi}
        />
  })
}

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {renderSushi(props)}
        <MoreButton renderMoreSushi={props.renderMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
