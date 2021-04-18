import React from 'react'
import { render } from '@testing-library/react'
import { Result } from './Result'

test('renders result', () => {
  const { getByText } = render(<Result category="some category" result={3} />)
  expect(getByText(/Your annual/i)).toBeInTheDocument()
  expect(getByText(/emission/i)).toBeInTheDocument()
  expect(getByText(/some category/i)).toBeInTheDocument()
})
