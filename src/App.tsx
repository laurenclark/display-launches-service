import React from 'react'
import Header from './components/Header'
import Layout from './layouts/Main'

import LaunchImg from './assets/img/launch-home@3x.png'

import './App.scss'

function App() {
  return (
    <>
      <Header />
      <Layout>
        <div className="container">
          <img src={LaunchImg} alt="A spaceship launching from a launch pad" />
        </div>
      </Layout>
    </>
  )
}

export default App
