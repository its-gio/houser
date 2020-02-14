import React, { Component } from 'react'
import { Redirect } from "react-router-dom"

export default class Step3 extends Component {
  constructor() {
    super();

    this.state = {
      shouldRedirect: false
    }
  }

  complete = () => {
    this.setState({shouldRedirect: true});
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        {this.state.shouldRedirect ? <Redirect to="/"/> : null}
        Step3
        <button onClick={this.goBack}>Prev Step</button>
        <button onClick={this.complete}>Complete</button>
      </div>
    )
  }
}
