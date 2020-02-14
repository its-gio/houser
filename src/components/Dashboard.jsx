import React, { Component } from 'react'
import { Link } from "react-router-dom"
import House from './House'


export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <Link to="/wizard/address"><button>Add New Property</button></Link>
        <House />
      </div>
    )
  }
}
