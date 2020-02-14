import React, { Component } from 'react'
import { Link } from "react-router-dom"
import store, { UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIPCODE } from '../../store';

export default class Step1 extends Component {
  constructor() {
    super()
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zipcode: reduxState.zipcode
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  saveChanges = () => {
    store.dispatch({
      type: UPDATE_NAME,
      payload: this.state.name
    })

    store.dispatch({
      type: UPDATE_ADDRESS,
      payload: this.state.address
    })

    store.dispatch({
      type: UPDATE_CITY,
      payload: this.state.city
    })

    store.dispatch({
      type: UPDATE_STATE,
      payload: this.state.state
    })

    store.dispatch({
      type: UPDATE_ZIPCODE,
      payload: this.state.zipcode
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} type="text" value={this.state.name} name="name" placeholder="name"/>
        <input onChange={this.handleChange} type="text" value={this.state.address} name="address" placeholder="address"/>
        <input onChange={this.handleChange} type="text" value={this.state.city} name="city" placeholder="city"/>
        <input onChange={this.handleChange} type="text" value={this.state.state} name="state" placeholder="state"/>
        <input onChange={this.handleChange} type="number" value={this.state.zipcode} name="zipcode" placeholder="zip code"/>
        <Link to="/wizard/step2"><button onClick={this.saveChanges}>Next Step</button></Link>
      </div>
    )
  }
}