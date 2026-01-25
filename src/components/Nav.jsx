import React from 'react'
import './nav.scss'
import DateTime from './DateTime'
const Nav = (props) => {
  return (
    <div className='Navbar'>
        <div className="Nav1">
            <div><img src="/icons/apple.svg" alt="Logo" /></div>
            <div><h4>Sani Chavhan</h4></div>
            <div><h4>File</h4></div>
            <div><h4>Window</h4></div>
            <div><h4>Terminal</h4></div>
        </div>
        <div className="Nav2">
            <div><img src="/icons/wifi.svg" alt="Wifi" /></div>
            <div><h4><DateTime></DateTime></h4></div>
        </div>      
    </div>
  )
}

export default Nav
