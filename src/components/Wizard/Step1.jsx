import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Axios from 'axios'

export default class Step1 extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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

        <button onClick={this.complete}>Complete</button>
      </div>
    )
  }
}