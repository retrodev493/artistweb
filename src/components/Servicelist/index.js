import { serviceData } from '@/app/data/servideData'
import Link from 'next/link'
import React from 'react'

const Servicelist = () => {
  return (
    <ul>
    {serviceData.links.data.map((item , index)=>(
        <li className='mb-2 hover:translate-x-[20px] transition-all duration-500 ease-in-out w-[max-content]' key={index}>
            <Link className='text-fs-38 font-semibold' href={item.link}>{item.title}</Link>
        </li>
    ))}
    </ul>
  )
}

export default Servicelist