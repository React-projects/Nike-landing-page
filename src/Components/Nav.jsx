import React from 'react'
import HeaderLogo from '../assets/images/header-logo.svg'
import hamburger from '../assets/icons/hamburger.svg'
import { navLinks } from '../constants'

const Nav = () =>
{
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/" aria-label='logo'>
                    <img src={HeaderLogo} alt="logo" width={130} height={29} />

                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden  text-slate-gray'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal'>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className=' hidden max-lg:block'>
                    <img src={hamburger} alt="hamburger" width={24} height={24} />
                </div>
            </nav>
        </header>
    )
}

export default Nav
