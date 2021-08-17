import { render, screen } from '@testing-library/react'
import { Button } from './Button'

test('testing test', () => {
  render(<Button>Hello</Button>)

  const text = screen.getByText('Hello')
  expect(text).toBeInTheDocument()
})
