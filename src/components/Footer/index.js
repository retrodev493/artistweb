import { footerLink } from '@/app/data/FooterData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './style.css'
const Footer = () => {
  return (
    <footer className='py-[120px]'>
      <div className='container'>
        <div className='footer-wrap'>
          <div className='flex mb-[72px]'>
            <div className='w-[60%]'>
              <div className='footer-content max-w-[920px]'>
              <div className='mb-[118px]'>
              <h4 className='text-black-color text-ttl-53 font-semibold leading-snug'>{footerLink.title}</h4>
              </div>
              <div className='getintouch-wrap'>
                <h6 className='text-black-color leading-normal text-fs-16 mb-4'>{footerLink.getintouch.title}</h6>
                <div>
                  {footerLink.getintouch.data.map((item , index)=>(
                    <Link className='block text-fs-28 mb-4 font-semibold get-in-touch-links w-[max-content]' key={index} href={item.link}>{item.title}</Link>
                  ))}
                  <p className='text-fs-28 mb-4 font-semibold'>
                    {footerLink.getintouch.address}
                  </p>
                </div>
              </div>
              </div>
            </div>
            <div className='w-[40%]'>
                <div className='max-w-[536px] ml-auto flex flex-col gap-12'>
                  <div className='bg-black-color py-[24px] px-[40px] rounded-[32px] flex justify-between'>
                  <p className='text-fs-20 text-white-color leading-normal font-normal'>
                    {footerLink.followus.title}
                  </p>
                  <div className='flex gap-8 items-center'>
                  {footerLink.followus.data.map((item ,index)=>(
                    <Link title={item.alt} className='block follow-us-img-wrap' href={item.link} key={index}>
                      <Image src={item.img} width={24} height={24} alt={item.alt}/>
                    </Link>
                  ))}
                  </div>
                  </div>
                  <div className='bg-bg-gray px-[60px] py-[48px] rounded-[32px]'>
                  <div>
                    <h4 className='text-ttl-48 font-semibold text-center leading-snug text-black-color mb-4'>{footerLink.getstarted.title}</h4>
                    <p className='text-fs-16 leading-normal text-center'>{footerLink.getstarted.subttl}</p>
                    <div className='text-center mt-12'>

                      <Link className='primary-btn bg-blue-color w-full' title={footerLink.getstarted.link_text} href={footerLink.getstarted.link_url}>
                        <span className='block text-1 text-fs-24 text-white-color '>{footerLink.getstarted.link_text}</span>
                        <span className='block text-2 text-fs-24 text-white-color '>{footerLink.getstarted.link_text}</span>
                      </Link>
                    </div>
                  </div>
                  </div>  

                </div>
            </div>
          </div>
          <div className='footer-policies flex justify-between'>
            <div><p className='text-gray text-fs-16 '>{footerLink.terms.cpright}</p></div>
            <div>
              <div className='flex gap-8'>
              <Link className='text-gray text-fs-16 hover:text-black-color transition-all duration-200 ease' title={footerLink.terms.policy_ttl} href={footerLink.terms.policy_link}>{footerLink.terms.policy_ttl}</Link>
              <Link className='text-gray text-fs-16 hover:text-black-color transition-all duration-200 ease' title={footerLink.terms.terms_ttl} href={footerLink.terms.terms_link}>{footerLink.terms.terms_ttl}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer