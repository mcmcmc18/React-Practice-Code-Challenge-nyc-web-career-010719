import React, { Fragment } from 'react'

const Form = (props) => {
    return (
  <Fragment>
      <form onSubmit={(event) => props.addMoneyToWallet(event)}>
        Add Money:
        <input type="number" name="wallet" value={props.addedMoney} onChange={props.handleChange} />
        <input type="submit" value="Submit"/>
      </form>
    </Fragment>
  )

}

export default Form
