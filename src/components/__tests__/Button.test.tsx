import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../Button'
import { render, screen } from '@testing-library/react'

it('Renders a Button', () => {
  const wrapper = render(<Button></Button>)
  expect(wrapper).toMatchSnapshot()
})

it('Renders a Button with a child string', () => {
  const wrapper = render(<Button>Action</Button>)
  expect(wrapper).toMatchSnapshot()
  expect(screen.getByRole('button')).toHaveTextContent('Action')
})

it('Renders a Button with padding props', () => {
  const wrapper = render(<Button padding="1rem 2rem 3rem 4rem"></Button>)
  expect(wrapper).toMatchSnapshot()
  expect(screen.getByRole('button')).toHaveStyle(`
  padding: 1rem 2rem 3rem 4rem;
`)
})

it('Renders a Button with radius props', () => {
  const wrapper = render(<Button radius="5px"></Button>)
  expect(wrapper).toMatchSnapshot()
  expect(screen.getByRole('button')).toHaveStyle(`
  border-radius: 5px;
`)
})
