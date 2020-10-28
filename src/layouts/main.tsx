import React from 'react'
import './Main.module.scss'

interface Props {
  children: JSX.Element[] | JSX.Element | string
}

function Layout({ children }: React.PropsWithChildren<Props>) {
  return <main>{children}</main>
}

export default Layout
