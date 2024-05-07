import { serviceData } from '@/app/data/servideData'
import Button from '@/components/Button'
import Servicelist from '@/components/Servicelist'
import Link from 'next/link'
import React from 'react'

const Ourservices = () => {
  return (
    <section className='pt-[144px]'>
        <div className='container'>
            <div className='mb-6'>
            <h3 className='text-ttl-67 font-semibold text-black-color'>{serviceData.title}</h3>
            </div>
            <div className='flex gap-10'>
            <div className='w-[40%]'>
                <p className='text-fs-16 text-black-color mb-4'>{serviceData.head}</p>
                <Servicelist/>
            </div>
            <div className='w-[60%]'>
              <div className='bg-blue-color p-[64px] rounded-[32px]'>
                <div className='mb-8'>
                  <h5 className='text-ttl-48 text-white-color font-semibold'>
                  {serviceData.box_content.title}
                  </h5>
                </div>
                <div className='flex gap-4'>
                
                  <Link href={serviceData.box_content.btn1link} className='primary-btn max-w-[244px] bg-white-color'>
                    <span className='text-1 text-black-color text-fs-24 font-medium'>{serviceData.box_content.btn1data}</span>
                    <span className='text-2 text-black-color text-fs-24 font-medium'>{serviceData.box_content.btn1data}</span>
                  </Link>
                 
                <Button type={"button"} outline={'outline-secondary text-fs-24 text-white-color'} name={serviceData.box_content.btn2data}/>
                </div>

              </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Ourservices