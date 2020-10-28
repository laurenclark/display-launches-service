import React from 'react'

interface TableData {
  index: number
  title: string
  date: string
  ship: string
}

function TableRow({ index, title, date, ship }: TableData) {
  return (
    <div className="table-row">
      <div className="table-row__number">#{index}</div>
      <div className="table-row__title">{title}</div>
      <div className="table-row__details">
        <time>{date}</time>
        <p>{ship}</p>
      </div>
    </div>
  )
}

export default TableRow
