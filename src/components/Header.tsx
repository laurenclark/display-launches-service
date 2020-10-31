import React, { useContext } from 'react'
import Image from 'react-simple-image'
import { RefreshIcon } from './icons/icons'
import Button from './Button'
import { Context } from '../Context'
import './Header.scss'

function Header() {
  const { fetchData } = useContext(Context)

  return (
    <header>
      <span>
        <a href="/">
          <Image
            alt="SpaceX Launches Logo"
            src="./img/spacex-logo.png"
            srcSet={{
              '3x': './img/spacex-logo.png'
            }}
          />
        </a>
        Launches
      </span>
      <Button
        radius="25px 0 0 25px"
        padding="0.8rem 1.4rem"
        clickHandler={() => fetchData()}>
        Reload Data
        <RefreshIcon />
      </Button>
    </header>
  )
}

export default Header
