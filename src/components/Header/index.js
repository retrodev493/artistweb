import Link from 'next/link'
import React from 'react'
import './style.css'

const Header = () => {
  return (
    <header className='fixed w-full z-10 left-0 top-0 header-wrap'>
      <div className='container'>
      <div className='flex justify-between items-center py-[30px]'>
      <div className='logo-wrap'>
      <Link title='Artist data' href='./'>
      <svg  viewBox="0 0 64.06 32" width="64.05999755859375" height="32">
        <rect id="line1" x="12.31" width="6.78" height="32"/>
        <polygon id="angle1" points="0 32 6.78 32 12.31 0 5.53 0 0 32"/>
        <rect id="line2" x="25.88" width="6.78" height="32"/>
        <polygon id="angle2" points="32.66 32 39.44 32 44.97 0 38.19 0 32.66 32"/>
        <rect id="line3" x="44.97" width="6.78" height="32"/>
        <polygon id="angle3" points="57.28 0 51.75 32 58.53 32 64.06 0 57.28 0"/>
      </svg></Link>
      </div>
      
      <div>
        <div className='flex items-center gap-4'>
          <Link className='gt-btn block' title='get in touch' href='./'>
            <span className='primary-text font-medium'>Get in touch</span>
            <span className='secondary-text font-medium'>Get in touch</span>
          </Link>

          <button className='rounded-menu-btn'>
            <span className='block'></span>
            <span className='block'></span>
          </button>
        </div>
      </div>

      </div>
      </div>
    </header>
  )
}

export default Header