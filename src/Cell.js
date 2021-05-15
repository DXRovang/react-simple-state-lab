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
      <div className="cell" style={{backgroundColor: '#fff'}}></div>
    )
  }

}