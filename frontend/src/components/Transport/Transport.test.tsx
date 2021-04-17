import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import { Transport } from './Transport'

describe('Transport tests', () => {
  test('renders question', async () => {
    const { findByTestId } = render(<Transport />)
    const questionElement = await findByTestId(/How many miles do you commute/i)
    expect(questionElement).toBeInTheDocument()
  })

  test('show skeletons', async () => {
    const { findByTestId } = render(<Transport />)
    const skeletonElement = await findByTestId('skeleton')
    expect(skeletonElement).toBeInTheDocument()
  })
})
