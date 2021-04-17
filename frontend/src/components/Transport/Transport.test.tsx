import React from 'react'
import { render } from '@testing-library/react'
import { Transport } from './Transport'

test('renders question', () => {
  const { getByText } = render(<Transport />)
  const questionElement = getByText(/How many miles do you commute/i)
  expect(questionElement).toBeInTheDocument()
})
