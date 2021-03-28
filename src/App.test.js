import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('when the user inputs a valid binary number', () => {
  it('should show the result as decimal', () => {
    render(<App />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    userEvent.type(input, '10')
    userEvent.click(button)

    const result = screen.getByText('2')
    expect(result).toBeInTheDocument()
  })
})

describe('when the user inputs an invalid binary number', () => {
  it('should show the an error message in red', () => {
    render(<App />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    userEvent.type(input, '12')
    userEvent.click(button)

    const errorMessage = screen.getByText('Non binary number')

    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage).toHaveClass('invalid')
  })
})
