import React from 'react'
import Logo from '../assets/img/spacex-logo.png'
import Button from './Button'
import './Header.module.scss'

function Header() {
  return (
    <header>
      <span>
        <img src={Logo} alt="SpaceX Launces Logo" />
        Launches
      </span>
      <Button radius="25px 0 0 25px" padding="0.7rem 1rem">
        Reload Data
      </Button>
    </header>
  )
}

export default Header
