import React from 'react'
import styles from './Button.module.scss'

interface Props {
  children: React.ReactNode
  padding?: string
  radius?: string
}

function Button({ padding, radius, children }: Props) {
  const ButtonStyles = {
    padding: `${padding}`,
    borderRadius: `${radius}`
  }
  return (
    <button className={styles.button} style={ButtonStyles}>
      {children}
    </button>
  )
}

export default Button
