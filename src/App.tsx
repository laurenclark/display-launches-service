import React from 'react'
import Header from './components/Header'
import Layout from './layouts/Main'
import TableRow from './components/TableRow'
import Button from './components/Button'
import Image from 'react-simple-image'
import './App.scss'

function App() {
  return (
    <>
      <Header />
      <Layout>
        <div className="container">
          <Image
            alt="Space ship launching"
            src="./img/launch-home.png"
            srcSet={{
              '2x': './img/launch-home@2x.png',
              '3x': './img/launch-home@3x.png'
            }}
          />
          <div>
            <div className="button-container">
              <Button padding="0.8rem 1rem">
                Filter by Year
                <Image
                  alt="Select Icon"
                  src="./icon/select.png"
                  className="icon icon__select"
                  srcSet={{
                    '3x': './icon/select@3x.png',
                    '2x': './icon/select@2x.png'
                  }}
                />
              </Button>
              <Button padding="0.8rem 1rem">
                Sort Descending
                <Image
                  alt="Sort Icon"
                  src="./icon/sort.png"
                  className="icon icon__sort"
                  srcSet={{
                    '3x': './icon/sort@3x.png',
                    '2x': './icon/sort@2x.png'
                  }}
                />
              </Button>
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
