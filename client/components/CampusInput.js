/* eslint react/no-unused-state:0 */
import React, { Component } from 'react';

export class CampusInput extends Component {

  //your code here
  constructor() {
    super();
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({name: event.target.value});
  }
  render() {
    //your code here
    return (
      <input onChange={this.handleChange}/>
    )
  }
}
