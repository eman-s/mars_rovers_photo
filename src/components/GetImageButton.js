import React, { Component } from 'react';

export default class GetImageButton extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.handleClick}>Click me!</button>
      </div>
    )
  }

}
