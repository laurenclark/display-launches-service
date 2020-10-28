import React from 'react'
import Logo from '../assets/img/spacex-logo.png'
import './Header.module.scss'

function Header() {
  return (
    <header>
      <span>
        <img src={Logo} alt="SpaceX Launces Logo" />
        Launches
      </span>
      <button>Reload Data</button>
    </header>
  )
}

export default Header
