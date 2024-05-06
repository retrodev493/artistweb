import { serviceData } from '@/app/data/servideData'
import Link from 'next/link'
import React from 'react'

const Servicelist = () => {
  return (
    <ul>
    {serviceData.links.data.map((item , index)=>(
        <li key={index}>
            <Link></Link>
        </li>
    ))}
    </ul>
  )
}

export default Servicelist