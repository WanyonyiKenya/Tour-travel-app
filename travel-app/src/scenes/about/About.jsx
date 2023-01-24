import React from 'react'
import Nav from '../../components/nav/Nav'
import about from '../../assets/about.jpg'
import Hero from '../../components/hero/Hero'


const About = () => {
  return (
    <div>
      <Nav />
      <Hero 
        hero = 'abthero'
        img={about}
        title = 'About US'
      
      />
    </div>
  )
}

export default About