import React, { useEffect, useState, useContext } from 'react'
import Header from './components/Header'
import Layout from './layouts/Main'
import TableRow from './components/TableRow'
import Button from './components/Button'
import LoadingSpinner from './components/LoadingSpinner'
import Image from 'react-simple-image'
import { SelectIcon, SortIcon } from './components/icons/icons'
import { format } from 'date-fns'
import { Context } from './Context'
import './App.scss'

function App() {
  const [buttonText, setButtonText] = useState('')
  const [isDesc, setIsDesc] = useState(true)
  const { isError, flights, setFlights, isLoading, fetchData } = useContext(
    Context
  )
  const buttonPadding = '0.6rem 1.6rem'
  const errorMessage = `😨 Oh No! Something went wrong with your request. 
                        Please try refreshing the page.`
  const url = `https://api.spacexdata.com/v3/launches`

  function sortFlights() {
    setIsDesc(!isDesc)
    setFlights([...flights].reverse())
  }

  function filterByYear(year: string) {
    setFlights([...flights].filter((flight) => flight.launch_year === year))
  }

  useEffect(() => {
    setButtonText(isDesc ? 'Descending' : 'Ascending')
  }, [isDesc])

  return (
    <>
      <Header />
      <Layout>
        <>
          {isError && <div className="error">{errorMessage}</div>}

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
                    <Button
                      padding={buttonPadding}
                      clickHandler={() => filterByYear('2012')}>
                      Filter by Year <SelectIcon />
                    </Button>
                    <Button padding={buttonPadding} clickHandler={sortFlights}>
                      Sort {buttonText} <SortIcon />
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
                        key={flight_number}
                        flightNumber={flight_number}
                        mission={mission_name}
                        date={format(new Date(launch_date_utc), 'do MMM yyyy')}
                        rocket={rocket?.rocket_name}
                      />
                    )
                  )}
                </>
              )}
              <Button clickHandler={() => fetchData(url, '')}>Load All</Button>
            </div>
          </div>
        </>
      </Layout>
    </>
  )
}

export default App
