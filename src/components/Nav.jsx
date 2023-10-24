import React from 'react'
import headerLogo from "../assets/assets/images/header-logo.svg";
import hamburger from "../assets/assets/icons/hamburger.svg"
import { navLinks } from '../constants/config';
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex justify-between items-center max-container'>
        <a href='/'>
        <img src={headerLogo} alt="headerlogo" width={130} height={29}/>
        </a>
        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
    {
        navLinks.map((item)=>(
            <li key={item.label}>
            <a href={item.href} className='font-montserrat text-lg text-slate-gray'>
                {item.label}
            </a>
            </li>
        ))
    }
        </ul>
        <div className='max-lg:block hidden'>
            <img src={hamburger} alt='ham' width={25} height={25}/>
        </div>
    </nav>
    </header>
  )
}

export default Nav