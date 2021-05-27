import * as Styled from './styled'

export type TextProps = {
  label: string
}

export const Text: React.FC<TextProps> = ({ label }: TextProps) => {
  return (
    <Styled.Container>
      <p>{label}</p>
    </Styled.Container>
  )
}
