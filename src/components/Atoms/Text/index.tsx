import * as Styled from './styled'

export type Props = {
  label: string
}

export const Text = ({ label }: Props) => {
  return (
    <Styled.Container>
      <p>{label}</p>
    </Styled.Container>
  )
}
