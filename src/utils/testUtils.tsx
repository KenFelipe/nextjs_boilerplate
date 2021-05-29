import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme'

type props = {
  children: React.ReactNode
}

const AllTheProviders: React.FC = ({ children }: props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
