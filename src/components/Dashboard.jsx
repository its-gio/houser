import React, { Component } from 'react'
import { Link } from "react-router-dom"
import House from './House'


export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
    }
  }
  render() {
    const houseMap = this.state.houses.map((house, i) => <House key={i} house={house} />)
    return (
      <div>
        <h2>Dashboard</h2>
        <Link to="/wizard/address"><button>Add New Property</button></Link>
        { houseMap }
      </div>
    )
  }
}