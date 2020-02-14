import React, { Component } from 'react'

export default class Address extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcod: ""
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" name="name"/>
        <input type="text" name="address"/>
        <input type="text" name="city"/>
        <input type="text" name="state"/>
        <input type="number" name="zipcod"/>
      </div>
    )
  }
}
