import React, { Component } from 'react'

export default class Classcomp extends Component {
  render() {
    return (
        <div className='container2'>
        <h1>This is created using Class Component</h1>
        <h4>This is done using external CSS</h4>
        <h4 style={{color:'white'}}>This is done using internal CSS</h4>
        </div>
    )
  }
}
