import React from 'react'

interface Props {
  children: JSX.Element[] | JSX.Element | string
}

function Layout({ children }: React.PropsWithChildren<Props>) {
  return <main>{children}</main>
}

export default Layout
