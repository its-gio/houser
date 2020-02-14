import React, { Component } from 'react'

export default class House extends Component {
  render() {
    console.log(this.props.house.name)
    return (
      <div>
        <h4>{this.props.house.name}</h4>
        <button>X</button>
        <img src={this.props.house.img} alt=""/>
        <hr/>
      </div>
    )
  }
}
