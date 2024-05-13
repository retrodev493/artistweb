import { bannerData } from '@/app/data/herosectionData'
import React from 'react'
import './style.css'
import Link from 'next/link'
const HeroSection = () => {
  return (
   <section className='pt-[240px] pb-[144px]'>
    <div className='container'>
    <div className='mb-[152px]'>
    <h1 className='text-ttl-149 banner-ttl font-semibold banner-title leading-[1.14]'>
    Crafting <span className='inline-block text-gradient-anim'>Digital</span>Experiences
    </h1>
    </div>
    <div className='flex items-center justify-between'>
        <div>
            <div className='flex items-center gap-6'>
                <div className='bg-black-color w-[72px] h-[72px]  rounded-full flex justify-center items-center'>
                <span className='text-white-color block number-block text-fs-24'>20</span>
                </div>
                <div>
                <p className='text-fs-24 text-gray'>Years in the market</p>
                </div>
            </div>
        </div>
        <div>
            <div className='flex gap-16 items-center justify-between'>
                <div>
                <p className='text-fs-28 max-w-[740px]'>{bannerData.data2.title}</p>
                </div>
                
                <Link className='primary-btn bg-blue-color max-w-[244px] block' title={bannerData.data2.btn_text} href={bannerData.data2.btn_link}>
                    <span className='text-1 text-white-color text-fs-24'>{bannerData.data2.btn_text}</span>
                    <span className='text-2 text-white-color text-fs-24'>{bannerData.data2.btn_text}</span>
                </Link>
            </div>
        </div>
    </div>
    </div>
   </section>
  )
}

export default HeroSection