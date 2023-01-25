import React from 'react'
import Nav from '../../components/nav/Nav'
import contact from '../../assets/contact.jpg'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'


const Contact = () => {
  return (
    <div>
      <Nav />
      <Hero 
        hero = 'abthero'
        img={contact}
        title = 'Contact US Now!'
      
      />
      <Footer />
    </div>
  )
}

export default Contact