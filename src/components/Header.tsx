import React from 'react'
import Image from 'react-simple-image'
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
        <Image
          alt="Refresh Icon"
          src="./icon/refresh.png"
          className="icon icon__refresh"
          srcSet={{
            '3x': './icon/refresh@3x.png',
            '2x': './icon/refresh@2x.png'
          }}
        />
      </Button>
    </header>
  )
}

export default Header
