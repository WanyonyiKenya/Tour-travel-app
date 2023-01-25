import React from 'react'
import elgon1 from '../../assets/1.png'
import elgon2 from '../../assets/2.jpg'
import mara1 from '../../assets/3.jpg'
import mara2 from '../../assets/4.jpg'
import './travel.css'
import TravelData from './TravelData'


const  Travel = () => {
  return (
    <div className='travel'>
        <h1>Popular destination</h1>
        <p>Touring heals the soul and mind</p>
        
       <TravelData
            travelclass = 'first-des-elgon'
            heading1 = 'Mt Elgon National Park'
            heading2 = 'Untamed Wilderness, Secluded Splendor'
            traveltext = ' Mount Elgon National Park is a national park 140 kilometres northeast of Lake Victoria. 
            The park covers an area of 1,279 square kilometres and is bisected by the border of Kenya and Uganda.
            High in the mist-wreathed hills of western Kenya is a towering volcanic giant, 
            crowned by a vast caldera etched by glacial tarns, honeycombed by labyrinthine caves, 
            fissured by valleys and cascaded by streams. Visitors can explore the forest,
             see the elephant caves and also enjoy biking, hiking, and rock on the eighth highest mountain in Africa, Mount Elgon.'
             timg1 = {elgon1}
             timg2 = {elgon2}
       />
       <TravelData
            travelclass = 'first-des-mara'
            heading1 = 'The Maasai Mara National Reserve'
            heading2 = 'Home of Cheetah and African Bush Elephant'
            traveltext = ' Maasai Mara, also sometimes spelled Masai Mara and locally known 
            simply as The Mara, is a large national game reserve in Narok, Kenya, 
            contiguous with the Serengeti National Park in Tanzania. It is named in honor of the Maasai people, 
            the ancestral inhabitants of the area, who migrated to the area from the Nile Basin.
            The Masai Mara is renowned for its abundance and variety of larger plains species as well as the variety of predator species. 
            It is considered the only place left in Kenya which resembles the wildlife population today from what it once was. 
            It is one of Africas most coveted wildlife viewing destinations
            A game drive is the most popular activity of the park and the best way to see the greatest variety and abundance of wildlife.'
             timg1 = {mara1}
             timg2 = {mara2}
       />
    </div>
  )
}

export default  Travel