import React from 'react'

type TableData = {
  flightNumber?: number
  mission?: string
  date?: string
  rocket?: string
}

function TableRow({ flightNumber, mission, date, rocket }: TableData) {
  return (
    <div className="table-row">
      <div className="table-row__number">#{flightNumber}</div>
      <div className="table-row__title">{mission}</div>
      <div className="table-row__details">
        <time>{date}</time>
        <p>{rocket}</p>
      </div>
    </div>
  )
}

export default TableRow
