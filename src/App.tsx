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
  const [selectedYear, setSelectedYear] = useState('')
  const [counter, setCounter] = useState(1)
  const [isFiltered, setIsFiltered] = useState(false)
  const [buttonText, setButtonText] = useState('')
  const [isDesc, setIsDesc] = useState(true)
  const [flightsView, setFlightsView] = useState([])
  const {
    isError,
    flights,
    setFlights,
    isLoading,
    fetchData,
    flightYears
  } = useContext(Context)
  const buttonPadding = '0.6rem 1.6rem'
  const errorMessage = `😨 Oh No! Something went wrong with your request. 
                        Please try refreshing the page.`
  const url = `https://api.spacexdata.com/v3/launches`
  const perPage = 10
  const uniqueFlightYears = [...new Set(flightYears)]
  function changeHandler(e) {
    setSelectedYear(e.target.value)
  }

  function sortFlights() {
    if (!isDesc && selectedYear) {
      setFlightsView(filterByYear(flights, selectedYear).reverse())
    } else if (selectedYear) {
      setFlightsView(filterByYear(flights, selectedYear))
    } else if (!isDesc) {
      setFlightsView([...flights].reverse())
    } else {
      setFlightsView([...flights])
    }
  }

  function filterByYear(arr: [], year: string) {
    return [...arr].filter((flight) => flight.launch_year === year)
  }

  useEffect(() => {
    setButtonText(isDesc ? 'Descending' : 'Ascending')
    sortFlights()
  }, [selectedYear, isDesc, flights])

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
              {!isLoading && flights && flights.length > 0 && (
                <>
                  <div className="button-container">
                    {!isFiltered ? (
                      <Button
                        padding={buttonPadding}
                        clickHandler={() => setIsFiltered(true)}>
                        <span>
                          Filter by Year <SelectIcon />
                        </span>
                      </Button>
                    ) : (
                      <>
                        {/* I left this inline as I doubt it will be reused. No need to make it a component - overoptimisation can cost time - refactor when necessary and ensure there is time for doing so. */}
                        <label htmlFor="yearSelect">Filter By Year</label>
                        <select
                          id="yearSelect"
                          value={selectedYear}
                          onChange={(e) => setSelectedYear(e.target.value)}>
                          <option value={null} disabled>
                            Select Year
                          </option>
                          <option value={''}>All</option>
                          {uniqueFlightYears.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </>
                    )}
                    <Button
                      padding={buttonPadding}
                      clickHandler={() => setIsDesc(!isDesc)}>
                      <span>
                        Sort {buttonText} <SortIcon />
                      </span>
                    </Button>
                  </div>
                  <div className="dataContainer">
                    {flightsView.map(
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
                          date={format(
                            new Date(launch_date_utc),
                            'do MMM yyyy'
                          )}
                          rocket={rocket?.rocket_name}
                        />
                      )
                    )}
                  </div>
                  <Button clickHandler={() => fetchData(url, '')}>
                    Load All
                  </Button>
                  <Button
                    clickHandler={() => {
                      return (
                        fetchData(url, `?limit=${perPage + counter * 10}`),
                        setCounter(counter + 1)
                      )
                    }}>
                    Load Next {perPage}
                  </Button>
                  <Button
                    clickHandler={() => {
                      return (
                        fetchData(url, `?limit=${perPage}`),
                        setIsFiltered(false),
                        setIsDesc(true),
                        setSelectedYear('')
                      )
                    }}>
                    Reset
                  </Button>
                </>
              )}
            </div>
          </div>
        </>
        <span
          style={{ textAlign: 'center', display: 'block', padding: '40px' }}>
          Made with ❤ by&nbsp;
          <a href="https://github.com/laurenclark/display-launches-service">
            laurenclark
          </a>
        </span>
      </Layout>
    </>
  )
}

export default App
