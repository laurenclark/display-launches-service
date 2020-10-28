import React from 'react'
import Image from 'react-simple-image'
import { RefreshIcon } from './icons/icons'
import Button from './Button'
import './Header.scss'

function Header() {
  return (
    <header>
      <span>
        <Image
          alt="SpaceX Launches Logo"
          src="./img/spacex-logo.png"
          srcSet={{
            '3x': './img/spacex-logo.png'
          }}
        />
        Launches
      </span>
      <Button radius="25px 0 0 25px" padding="0.7rem 1rem">
        Reload Data
        <RefreshIcon />
      </Button>
    </header>
  )
}

export default Header
