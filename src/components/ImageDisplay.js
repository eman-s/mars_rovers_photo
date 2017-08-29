import React, { Component } from 'react';

export default class ImageDisplay extends Component{
  render(){
    let images = this.props.images
    let marsPics = images.map((image)=>{
      return(
        <ul key={image.id}>
          <li>
            <img src={image.img_src} alt='space_rocks' />
          </li>
        </ul>
      )
    })
    return(
      <div>
      {marsPics}
      </div>
    )
  }
}
