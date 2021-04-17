import React from 'react'
import { render, screen } from '@testing-library/react'
import { Food } from './Food'

describe('Food tests', () => {
  test('renders question', async () => {
    const { findByTestId } = render(<Food />)
    const questionElement = await findByTestId(/How much of each food/i)
    expect(questionElement).toBeInTheDocument()
  })

  test('show skeletons', async () => {
    const { findByTestId } = render(<Food />)
    const skeletonElement = await findByTestId('skeleton')
    expect(skeletonElement).toBeInTheDocument()
  })
})
