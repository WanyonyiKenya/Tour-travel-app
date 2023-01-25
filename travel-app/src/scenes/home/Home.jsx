import React from 'react'
import Hero from '../../components/hero/Hero'
import Nav from '../../components/nav/Nav'
import home from '../../assets/home.jpg'
import Travel from '../../components/destination/Travel'
import Trip from '../../components/trips/Trip'

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero 
        hero = 'mainhero'
        img={home}
        title = 'Experience the World with Masafu Trips'
        text='We are the leading travel agency in the world'
        btn = 'Travel with US'
        btnclass='btnclass'
      />
      <Travel />
      <Trip />
    </div>
  )
}

export default Home