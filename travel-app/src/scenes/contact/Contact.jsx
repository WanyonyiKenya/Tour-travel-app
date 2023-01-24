import React from 'react'
import Nav from '../../components/nav/Nav'
import contact from '../../assets/contact.jpg'
import Hero from '../../components/hero/Hero'

const Contact = () => {
  return (
    <div>
      <Nav />
      <Hero 
        hero = 'abthero'
        img={contact}
        title = 'Contact US Now!'
      
      />
    </div>
  )
}

export default Contact