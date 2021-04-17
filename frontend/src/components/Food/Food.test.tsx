import React from 'react'
import { render } from '@testing-library/react'
import { Food } from './Food'

test('renders question', () => {
  const { getByText } = render(<Food />)
  const questionElement = getByText(/How much of each food do you consume/i)
  expect(questionElement).toBeInTheDocument()
})
