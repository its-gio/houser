import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import axios from "axios"
import store from "../../store"


export default class Step3 extends Component {
  constructor() {
    super();

    this.state = {
      shouldRedirect: false
    }
  }

  componentDidMount() {
    console.log(store.getState());
  }

  complete = () => {
    axios
      .post("/api/house", this.state)
      .then(() => this.clearState())
      .catch(err => console.error(err));
    this.setState({shouldRedirect: true});
  }

  goBack = () => {
    this.props.history.goBack();
  }

  
  // clearState = () => {
  //   this.setState({ name: "", address: "", city: "", state: "", zipcode: "" })
  // }

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
