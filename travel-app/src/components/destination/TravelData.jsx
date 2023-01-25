import React, { Component } from 'react'
import './travel.css'



export class TravelData extends Component {
  render() {
    return (
      <div>
         <div className={this.props.travelclass}>
            <div className='des-text'>
                <h2>{this.props.heading1}</h2>
                <h4>{this.props.heading2}</h4>
                <p>
                {this.props.traveltext}
                </p>
            </div>
            <div className='travel-img'>
                <img 
                    alt='travel'
                    src={this.props.timg1}
                />
                <img 
                    alt='travel'
                    src={this.props.timg2}
                />
            </div>
        </div>
      </div>
    )
  }
}

export default TravelData