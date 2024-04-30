import { teamdata } from '@/app/data/teamData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Teambar = () => {
  return (
    <>
    {teamdata.data.map((item , index)=>(
    <li key={index}>
        <Link href={item.href} title={item.title} className='mb-[24px] block group'>
            <div className='flex justify-between items-center'>
                <div>
                <h5 className='text-ttl-63 text-white-color font-semibold group-hover:scale-[0.94] origin-left transition-all duration-300' >{item.m_title}</h5>
                </div>
                <div className='opacity-0 group-hover:opacity-[1] transition-all duration-150'>
                    <div className='flex items-center gap-8'>
                        <div>
                            <span className='text-gray text-fs-16 font-normal'>{item.s_title}</span>
                            <p className='text-white-color text-fs-30 font-medium'>{item.s_ttl2}</p>
                        </div>
                        <div className='max-w-[72px] overflow-hidden rounded-full'>
                            <figure className='min-h-[72px] scale-[1.6] relative top-[20px]'>
                                <Image className='object-cover' src={item.img} width={item.width} height={item.height} alt={item.alt}/>
                            </figure>
                        </div>
                        <div>
                            <Image src={item.svg} width='49' height='34' alt='arrow'/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </li>
    ))}
    </>
  )
}

export default Teambar