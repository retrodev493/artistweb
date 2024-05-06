import Image from 'next/image'
import React from 'react'

const Bigbanner = () => {
  return (
    <section className='pb-[144px]'>
    <div className='container'>
        <div className='w-full rounded-[40px] overflow-hidden'>
            <figure className='pb-[56.66%] relative'>
                <Image className='object-cover' src='/images/BigBanner/1.jpg' fill alt='person'/>
            </figure>
        </div>
    </div>          
    </section>
  )
}

export default Bigbanner