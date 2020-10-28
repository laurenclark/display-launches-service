import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Layout from './layouts/Main'
import TableRow from './components/TableRow'
import Button from './components/Button'
import LoadingSpinner from './components/LoadingSpinner'
import Image from 'react-simple-image'
import { format } from 'date-fns'
import './App.scss'

function App() {
  const [flights, setFlights] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const url = `https://api.spacexdata.com/v3/launches?limit=20`
  let didCancel = false

  async function fetchData() {
    if (!didCancel) {
      try {
        // Await the first and then the second
        const response = await fetch(url)
        const json = await response.json()
        setFlights(json)
      } catch (error) {
        setIsError(true)
        console.error(error)
      }
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    return () => {
      // If the fetch request is slow, and the component has already
      // unmounted when the async request finishes there will be an error.
      didCancel = true
    }
  }, [])

  return (
    <>
      <Header />
      <Layout>
        <>
          {isError && (
            <div className="error">
              😨 <strong>Oh No!</strong> <br /> Something went wrong with your
              request. <br /> Please try refreshing the page.
            </div>
          )}

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
              {isLoading && <LoadingSpinner text="Loading Flights..." />}
              {!isLoading && flights.length === 0 && (
                <div className="error">No Flight Data</div>
              )}
              {flights && flights.length > 0 && (
                <>
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

                  {flights.map(
                    ({
                      flight_number,
                      mission_name,
                      rocket,
                      launch_date_utc
                    }) => (
                      <TableRow
                        flightNumber={flight_number}
                        mission={mission_name}
                        date={format(new Date(launch_date_utc), 'do MMM yyyy')}
                        rocket={rocket?.rocket_name}
                      />
                    )
                  )}
                </>
              )}
            </div>
          </div>
        </>
      </Layout>
    </>
  )
}

export default App
