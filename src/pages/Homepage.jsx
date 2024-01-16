import React from 'react'
import Welcome from '../components/Welcome'
import Shopping from '../components/Shopping'
import Product from '../components/Product'
import Woodensec from '../components/Woodensec'
import Latest from '../components/Latest'
import Offersec from '../components/Offersec'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import Backtop from '../components/Backtop'

const Homepage = () => {
  return (
      <div>
          <Welcome />
      <Shopping />
      <Product />
      <Woodensec />
      <Latest />
      <Offersec />
      <Testimonial />
      <Footer />
      <Backtop/>
    </div>
  )
}

export default Homepage