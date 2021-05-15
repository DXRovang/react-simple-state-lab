import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props){
    super()
    this.state = {
      color: props.val
    }
  }

  render(){
    return (
      <div style={{backgroundColor: this.state.color}}>hello</div>
    )
  }

}