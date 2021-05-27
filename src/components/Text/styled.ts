import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.size.secondary};
    color: ${theme.size.primary};
  `}
`