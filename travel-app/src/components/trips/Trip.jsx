import React from 'react'
import './trip.css'
import TripData from './TripData'

import amboseli from '../../assets/5.jpg'
import nairobi from '../../assets/6.jpg'
import diani from '../../assets/7.jpg'

const Trip = () => {
  return (
    <div className='trip'>
        <h1>Featured Trips</h1>
        <p>
        Fully Guided Tours & Trips in Kenya. Find the right fully guided Trip for you..
        </p>
        <div className='trip-comp'>
            <TripData
                tripImage={amboseli}
                heading = 'Trip To Amboseli'
                triptext='Crowned by Mount Kilimanjaro, Africas highest peak,
                 the Amboseli National Parks is one of Kenyas most popular parks. 
                 The name "Amboseli" comes from a Maasai word meaning "salty dust", 
                 and it is one of the best places in Africa to view large herds of elephants up close. 
                 Nature lovers can explore five different habitats here ranging from the dried-up bed of Lake Amboseli,
                  wetlands with sulphur springs, the savannah and woodlands.  They can also visit the local Maasai 
                  community who live around the park and experience their authentic culture.'
            />
            <TripData
                tripImage={nairobi}
                heading = 'Trip To Nairobi city (Kanairo)'
                triptext='Nairobi also known by the Nairobians as "Kanairo" has many parks and open spaces throughout the city that will blow your mind away.
                 Much of the city has dense tree-cover and plenty of green spaces.
                 Nairobi is the only city and country capital city with a National Park in it(Nairobi National Park)
                 The most famous park in Nairobi is Uhuru Park. The park borders the central business district and the
                 neighbourhood Upper Hill. Uhuru (Freedom in Swahili) Park is a centre for outdoor speeches, services, and rallies.'
            />
             <TripData
                tripImage={diani}
                heading = 'Trip To Diani Beach'
                triptext='A vibrant, uncrowded, intimate little paradise on the quiet shores of the Indian Ocean just south of Mombasa in beautiful Kenya.
                Incorporating Tiwi Beach, Galu Beach, Chale Island, Funzi Island, Msambweni and Kinondo.
                It has been voted Africas leading beach destination for the fifth time running since 2015. 
                The beach is about 17 kilometres (11 mi) long, from the Kongo river to the north and Galu beach 
                to the south (the southern point of reference is an old Baobab tree). Diani is one of the most 
                prominent tourism resort areas of Kenya.'
            />
        </div>
    </div>
  )
}

export default Trip