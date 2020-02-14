import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import axios from "axios"
import store, { UPDATE_MORTGAGE, UPDATE_RENT} from "../../store"

export default class Step3 extends Component {
  constructor() {
    super();
    const reduxState = store.getState()
    this.state = {
      shouldRedirect: false,
      monthly_mortgage: reduxState.monthly_mortgage,
      desired_rent: reduxState.desired_rent
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({ 
        monthly_mortgage: reduxState.monthly_mortgage,
        desired_rent: reduxState.desired_rent
      })
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  complete = () => {
    const reduxState = store.getState();
    console.log(reduxState);

    store.dispatch({
      type: UPDATE_MORTGAGE,
      payload: this.state.monthly_mortgage
    })

    store.dispatch({
      type: UPDATE_RENT,
      payload: this.state.desired_rent
    })
    
    axios
      .post("/api/house", reduxState)
      .then(() => console.log("Worked?"))
      .catch(err => console.error(err));
    this.setState({shouldRedirect: true});
  }

  goBack = () => {
    this.props.history.goBack();
  }


  render() {
    return (
      <div>
        { this.state.shouldRedirect ? <Redirect to="/"/> : null }
        <input onChange={this.handleChange} name="monthly_mortgage" placeholder="monthly mortgage" value={this.state.monthly_mortgage} type="number"/>
        <input onChange={this.handleChange} name="desired_rent" placeholder="desired rent" value={this.state.desired_rent} type="number"/>
        <button onClick={this.goBack}>Prev Step</button>
        <button onClick={this.complete}>Complete</button>
      </div>
    )
  }
}
