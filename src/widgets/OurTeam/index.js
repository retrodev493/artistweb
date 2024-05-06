import { teamdata } from '@/app/data/teamData'
import Teambar from '@/components/Teambar'
import React from 'react'
import './style.css'
const Ourteam = () => {
  return (
    <section className='pb-[144px]'>
        <div className='py-[144px] bg-blue-gradient bg-black-color'>
        <div className='container'>
            <div className='mb-4'>
              <h5 className='text-fs-28 text-white-color font-medium'>{teamdata.title}</h5>
            </div>
            <ul>
               <Teambar/>             
            </ul>
            <span className='h-[1px] w-full bg-slate-700 block my-[64px]'></span>
            <div className='flex justify-between '>
            <div>
              <h4 className='text-gradient text-ttl-67 font-semibold w-[max-content] mb-8'>{teamdata.ttl_ft}</h4>
              <p className='text-white-color text-fs-24 max-w-[570px] leading-normal font-normal my-8'>
                {teamdata.ttl_content}
              </p>
            </div>
           <div>
            <div className='flex gap-4'>
            {teamdata.btn_data.map((item , index)=>(
              <div key={index} className='border border-solid border-blue-color rounded-full h-[72px] flex items-center justify-center'>
              <span className='text-white-color block px-12 text-fs-24 font-normal'>
                {item.content}
              </span>
              </div>
            ))}
            </div>  
           </div>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Ourteam