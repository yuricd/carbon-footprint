import React from 'react'
import { render } from '@testing-library/react'
import { ErrorHandler } from './ErrorHandler'

test('renders error handler', () => {
  const { getByText } = render(
    <ErrorHandler thrownError={true} errorDescription="Some error">
      <p>Some content</p>
    </ErrorHandler>
  )
  expect(getByText(/Some error/i)).toBeInTheDocument()
})

test('renders error handler 2', () => {
  const { getByText, queryByText } = render(
    <ErrorHandler thrownError={false} errorDescription="Some error">
      <p>Some content</p>
    </ErrorHandler>
  )
  expect(queryByText(/Some error/i)).not.toBeInTheDocument()
  expect(getByText(/Some content/i)).toBeInTheDocument()
})
