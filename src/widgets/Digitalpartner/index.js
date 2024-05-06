import { digitalData } from '@/app/data/digitalpartnerData'
import React from 'react'

const DigitalPartners = () => {
  return (
    <section className='pb-[144px]'>
        <div className='container'>
            <div className='mb-6'>
                <h3 className='text-black-color text-ttl-67 font-semibold'>
                {digitalData.title}
                </h3>
            </div>
            <div className='flex gap-[80px]'>
                <div className='w-1/2'>
                    <div className='flex flex-col'>
                        <div className='max-w-[670px]'>
                        <p className='text-fs-28'>{digitalData.content}</p>
                        </div>
                        <div>bottom section</div>
                    </div>
                </div>
                <div className='w-1/2'>
                asideasideaside
                </div>
            </div>
        </div>
    </section>
  )
}
export default DigitalPartners
