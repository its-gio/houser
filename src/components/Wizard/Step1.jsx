import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Axios from 'axios'
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

  clearState = () => {
    this.setState({ name: "", address: "", city: "", state: "", zipcode: "" })
  }


  complete = () => {
    Axios
      .post("/api/house", this.state)
      .then(() => this.clearState())
      .catch(err => console.error(err));
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} type="text" name="name" placeholder="name"/>
        <input onChange={this.handleChange} type="text" name="address" placeholder="address"/>
        <input onChange={this.handleChange} type="text" name="city" placeholder="city"/>
        <input onChange={this.handleChange} type="text" name="state" placeholder="state"/>
        <input onChange={this.handleChange} type="number" name="zipcode" placeholder="zip code"/>
        <Link to="/wizard/step2"><button>Next Step</button></Link>

        {/* <button onClick={this.complete}>Complete</button> */}
      </div>
    )
  }
}