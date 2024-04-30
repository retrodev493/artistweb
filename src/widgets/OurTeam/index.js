import { teamdata } from '@/app/data/teamData'
import Teambar from '@/components/Teambar'
import React from 'react'

const Ourteam = () => {
  return (
    <section className='py-[144px] bg-blue-gradient bg-black-color'>
        <div className='container'>
            <div className='mb-4'>
                <h5 className='text-fs-28 text-white-color font-medium'>{teamdata.title}</h5>
            </div>
            <ul>
               <Teambar/>             
            </ul>
            <span className='h-[1px] w-full bg-slate-700 block my-[64px] '></span>
        </div>
    </section>
  )
}

export default Ourteam