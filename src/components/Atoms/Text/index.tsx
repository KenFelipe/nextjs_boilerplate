import * as Styled from './styled'

export type Props = {
  children: React.ReactNode
}

export const Text = ({ children }: Props) => {
  return <Styled.Container>{children}</Styled.Container>
}
