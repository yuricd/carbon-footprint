import React from 'react'
import { render } from '@testing-library/react'
import { RenderSkeleton } from './Skeleton'

test('renders skeleton', () => {
  const { getByTestId } = render(<RenderSkeleton />)
  const skeletonElement = getByTestId('skeleton')
  expect(skeletonElement).toBeInTheDocument()
})
