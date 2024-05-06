import { serviceData } from '@/app/data/servideData'
import React from 'react'

const Ourservices = () => {
  return (
    <section>
        <div className='container'>
            <div className='mb-6'>
            <h3 className='text-ttl-67 font-semibold text-black-color'>{serviceData.title}</h3>
            </div>
            <div className='services'>
                <p className='text-fs-16 text-black-color'>{serviceData.head}</p>
                
            </div>
        </div>
    </section>
  )
}

export default Ourservices