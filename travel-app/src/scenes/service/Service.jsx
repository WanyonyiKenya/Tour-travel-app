import React from 'react'
import Nav from '../../components/nav/Nav'
import service from '../../assets/service.jpg'
import Hero from '../../components/hero/Hero'

const Servece = () => {
  return (
    <div>
      <Nav />
      <Hero 
        hero = 'abthero'
        img={service}
        title = 'Services Offered'
      
      />
    </div>
  )
}

export default Servece