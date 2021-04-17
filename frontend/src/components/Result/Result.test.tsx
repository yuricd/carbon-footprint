import React from 'react'
import { render } from '@testing-library/react'
import { Result } from './Result'

test('renders result', () => {
  const { getByText } = render(<Result result={3} />)
  expect(getByText(/Your annual/i)).toBeInTheDocument()
  expect(getByText(/emission/i)).toBeInTheDocument()
})
