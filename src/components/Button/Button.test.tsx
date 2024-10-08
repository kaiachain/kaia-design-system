import { render, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import '@testing-library/jest-dom' // Extend Jest DOM matchers
import { KaButton } from './Button'
import { darkTheme } from '../../styles/theme'

// Mock hooks and icons
jest.mock('../../hooks', () => ({
  useKaTheme: () => ({
    getTheme: (category: string, level: string) => `mock-${category}-${level}`,
  }),
}))

jest.mock('../../icons/Chevron_right.svg', () => () => <div>Chevron_right</div>)
jest.mock('../../icons/ConfirmNormal.svg', () => () => <div>ConfirmNormal</div>)

describe('KaButton component', () => {
  test('renders the button with correct text', () => {
    const { getByText } = render(
      <ThemeProvider theme={darkTheme}>
        <KaButton onClick={() => {}}>Click Me</KaButton>
      </ThemeProvider>,
    )

    const buttonElement = getByText(/Click Me/i)
    expect(buttonElement).toBeInTheDocument()
  })

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <ThemeProvider theme={darkTheme}>
        <KaButton onClick={handleClick}>Click Me</KaButton>
      </ThemeProvider>,
    )

    const buttonElement = getByText(/Click Me/i)
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('renders with left icon', () => {
    const { getByText } = render(
      <ThemeProvider theme={darkTheme}>
        <KaButton onClick={() => {}} leftIcon="check">
          Click Me
        </KaButton>
      </ThemeProvider>,
    )

    const iconElement = getByText(/ConfirmNormal/i)
    expect(iconElement).toBeInTheDocument()
  })

  test('renders with right icon', () => {
    const { getByText } = render(
      <ThemeProvider theme={darkTheme}>
        <KaButton onClick={() => {}} rightIcon="right">
          Click Me
        </KaButton>
      </ThemeProvider>,
    )

    const iconElement = getByText(/Chevron_right/i)
    expect(iconElement).toBeInTheDocument()
  })

  test('applies correct styles for different types', () => {
    const { getByText } = render(
      <ThemeProvider theme={darkTheme}>
        <KaButton onClick={() => {}} type="secondary">
          Secondary Button
        </KaButton>
      </ThemeProvider>,
    )
    const buttonElement = getByText(/Secondary Button/i)
    expect(buttonElement).toHaveStyle('border: 1px solid mock-brand-4')
  })
})
