import { partnerData } from '@/app/data/partnerData'
import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <section className='pb-[144px]'>
        <div className='container'>
            <div className='max-w-[1200px] mb-[144px]'>
                <h4 className='text-ttl-67 leading-snug font-semibold'>
                    {partnerData.title}
                </h4>
            </div>
            <div className='flex items-center justify-between'>
            {partnerData.brands.img.map((item , index)=>(
                <div key={index}>
                    <div>
                    <Image className='!h-[67px]' src={item.src} alt={item.alt} height='67' width={item.width}/>
                    </div>
                </div>
            ))}
            </div>
            <div className='py-[144px]'>
                <div className='overflow-auto'>

                <h4 className='text-ttl-149 whitespace-nowrap font-semibold'>{partnerData.sliding_text}</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Partners