import styled, { css } from 'styled-components'

export const Container = styled.div.attrs(() => ({ as: 'p' }))`
  ${({ theme }) => css`
    font-size: ${theme.size.secondary};
    color: ${theme.color.secondary};
  `}
`
