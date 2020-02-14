import React, { Component } from 'react'
import { Link } from "react-router-dom"
import House from './House'
import Axios from 'axios';


export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
    }
  }

  componentDidMount() {
    Axios
      .get("/api/houses")
      .then(res => this.setState({ houses: res.data }))
      .catch(err => console.error(err));
  }

  render() {
    const houseMap = this.state.houses.map((house, i) => <House key={i} house={house.house} />)
    return (
      <div>
        <h2>Dashboard</h2>
        <Link to="/wizard/address"><button>Add New Property</button></Link>
        { houseMap }
      </div>
    )
  }
}