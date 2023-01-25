import React from 'react'
import './trip.css'

const TripData = ({tripImage, heading,triptext}) => {
  return (
    <div className='trip-card'>
        <div className='trip-img'>
            <img
                alt = 'tripImage'
                src={tripImage}
            />
            <h4>{heading}</h4>
            <p>{triptext}</p>
        </div>
    </div>
  )
}

export default TripData