import React, { Component } from 'react'
import { Link } from "react-router-dom"
import store, { UPDATE_IMG } from "../../store"

export default class Step2 extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      img: reduxState.img
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  saveChanges = () => {
    store.dispatch({
      type: UPDATE_IMG,
      payload: this.state.img
    })
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} type="text" name="img" placeholder="Image URL" value={this.state.img}/>
        <button onClick={this.goBack}>Prev Step</button>
        <Link to="/wizard/step3"><button onClick={this.saveChanges}>Next Step</button></Link>
      </div>
    )
  }
}
