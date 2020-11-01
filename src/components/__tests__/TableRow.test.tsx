import React from 'react'
import ReactDOM from 'react-dom'
import TableRow from '../TableRow'
import { render } from '@testing-library/react'

it('Renders a TableRow', () => {
  const wrapper = render(
    <TableRow
      key={1}
      flightNumber={1}
      mission={'FalconSat'}
      date={'2006-03-24T22:30:00.000Z'}
      rocket={'Falcon 1'}></TableRow>
  )
  expect(wrapper).toMatchSnapshot()
})
