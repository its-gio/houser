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

  getHouses = () => {
    Axios
      .get("/api/houses")
      .then(res => this.setState({ houses: res.data }))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getHouses()
  }

  deleteHouse = (house_id) => {
    Axios
      .delete(`/api/house/${house_id}`, )
      .then(() => {
        this.getHouses()
      })
      .catch(err => console.error(err));
  }

  render() {
    const houseMap = this.state.houses.map((house, i) => <House key={i} deleteHouse={this.deleteHouse} house={house} />)
    return (
      <div>
        <h2>Dashboard</h2>
        <Link to="/wizard/step1"><button>Add New Property</button></Link>
        { houseMap }
      </div>
    )
  }
}