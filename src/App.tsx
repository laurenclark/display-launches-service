import React from 'react'
import Header from './components/Header'
import Layout from './layouts/Main'
import TableRow from './components/TableRow'
import LaunchImg from './assets/img/launch-home@3x.png'
import Button from './components/Button'
import './App.scss'

function App() {
  return (
    <>
      <Header />
      <Layout>
        <div className="container">
          <img src={LaunchImg} alt="A spaceship launching from a launch pad" />
          <div>
            <div className="button-container">
              <Button padding="0.8rem 1rem">Filter by Year</Button>
              <Button padding="0.8rem 1rem">Sort Descending</Button>
            </div>
            <TableRow
              index={1}
              title="FalconSat"
              date={new Date().toDateString()}
              ship="Falcon 1"
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default App
