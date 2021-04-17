import React from 'react'
import { render, screen } from '@testing-library/react'
import { Presentation } from './Presentation'

test('render text elements', () => {
  render(<Presentation />)
  const titleElement = screen.getByText(/Calculate your carbon footprint/i)
  const footerNameElement = screen.getByText(/Yuri Delgado/i)
  const footerCreditsElement = screen.getByText(/Icons from Icons8/i)
  const elements = [titleElement, footerNameElement, footerCreditsElement]

  elements.map((el) => expect(el).toBeInTheDocument())
})
