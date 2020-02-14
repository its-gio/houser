import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Step2 extends Component {
  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        Step2
        <button onClick={this.goBack}>Prev Step</button>
        <Link to="/wizard/step3"><button>Next Step</button></Link>
      </div>
    )
  }
}
