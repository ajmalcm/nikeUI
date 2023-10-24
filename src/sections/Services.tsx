
import React from 'react'
import { services } from '../constants/config'
import ServiceCard from '../components/ServiceCard'
import { truckFast } from '../assets/assets/icons'

const Services = () => {
  return (
    <section className='flex justify-center max-container flex-wrap gap-9'>
      {/* <img src={truckFast} alt="hh"/> */}
      {
        services.map((service)=>(
          <ServiceCard key={service.label} {...service}/>
        ))
      }
    </section>
  )
}

export default Services