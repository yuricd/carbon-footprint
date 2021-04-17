import React from 'react'
import { render } from '@testing-library/react'
import { Card } from './Card'

test('renders card', () => {
  const { getByText } = render(
    <Card text="Lorem ipsum dolor" onlyText={true} />
  )
  expect(getByText(/Lorem ipsum dolor/i)).toBeInTheDocument()
})
