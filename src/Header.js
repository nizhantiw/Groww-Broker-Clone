import React from 'react'
import Logo from './logogroww.svg'
import "./Header.css"


export default function Header() {
  return (
    <div className='header__wrapper'>
        {/* {logo} */}
        <div className='header__logo'>
            <img src={Logo} width={100} alt="logo" />
             
        </div>
        {/* {search} */}
        <div className='header__search'>
            <div className='header__searchContainer'>
                <input placeholder='Search' type='text' />
            </div>
        </div>
        {/* {menu items} */}
        <div className='header__menuItems'>
            <a href='#'>Stocks</a>
            <a href='#'>Portfolio</a>
            <a href='#'>Cash</a>
            <a href='#'>F&O</a>
            <a href='#'>Account</a>
        </div>
      
    </div>
  )
}
