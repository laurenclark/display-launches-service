import React from 'react'
import './Button.scss'

type Props = {
  children?: React.ReactNode
  padding?: string
  radius?: string
  clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function Button({
  padding,
  radius,
  children,
  clickHandler
}: React.PropsWithChildren<Props>) {
  const ButtonStyles = {
    padding: `${padding}`,
    borderRadius: `${radius}`
  }
  return (
    <button onClick={clickHandler} style={ButtonStyles}>
      {children}
    </button>
  )
}

export default Button
