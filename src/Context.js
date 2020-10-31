import React, { useState, useEffect } from 'react'
const defaultVal = null
const Context = React.createContext(defaultVal)

interface Props {
  children: JSX.Element[] | JSX.Element | string;
}

function ContextProvider({ children }) {
  const [flights, setFlights] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [flightYears, setFlightYears] = useState([])
  const [isError, setIsError] = useState(false)

  const defaultUrl = `https://api.spacexdata.com/v3/launches`
  const defaultQuery = `?limit=10`

  let didCancel = false

  async function fetchData(url = defaultUrl, queryString = defaultQuery) {
    // Show user through UI feedback we are repopulating this list with fresh data
    // In prod this would be coupled with a toast/success message.
    setFlights([])
    setIsLoading(true)
    try {
      const response = await fetch(`${url}${queryString}`)
      const json = await response.json()
      await setFlights((prev) => [...json])
      await setFlightYears([...json].map((flight) => flight.launch_year))
    } catch (error) {
      setIsError(true)
      console.error(error)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    if (!didCancel) {
      fetchData()
    }
    return () => {
      // If the fetch request is slow, and the component has already
      // unmounted when the async request finishes there will be an error.
      didCancel = true
    }
  }, [])

  return (
    <Context.Provider
      value={{
        flights,
        isLoading,
        isError,
        fetchData,
        setFlights,
        flightYears
      }}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
