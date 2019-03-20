import React, { Fragment } from 'react'

const renderSushiImage = (props) => {
  if (props.eatenSushi.includes(props.sushi)){
    return null
  }
  else if (!props.eatenSushi.includes(props.sushi)){
    return <img src={props.sushi.img_url} width="100%" />
  }
}

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"
        onClick={(id) => props.canIEatSushi(props.sushi.id)}>
        {renderSushiImage(props)}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
