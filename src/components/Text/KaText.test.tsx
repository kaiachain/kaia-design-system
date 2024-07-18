import { render } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import '@testing-library/jest-dom' // Extend Jest DOM matchers
import { KaText } from './Text'
import { darkTheme } from '../../styles/theme'

describe('KaText component', () => {
  test('renders the text correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={darkTheme}>
        <KaText fontType={'body/lg_400'}>Hello, World!</KaText>
      </ThemeProvider>,
    )

    const textElement = getByText(/Hello, World!/i)
    expect(textElement).toBeInTheDocument()
  })

  test('applies the correct styles', () => {
    const { getByText } = render(
      <ThemeProvider theme={darkTheme}>
        <KaText fontType={'body/lg_400'} color="blue">
          Styled Text
        </KaText>
      </ThemeProvider>,
    )

    const textElement = getByText(/Styled Text/i)
    expect(textElement).toHaveStyle('color: blue')
    expect(textElement).toHaveStyle('font-size: 16px')
    expect(textElement).toHaveStyle('font-weight: 400')
  })
})
