import { StyledButton } from './Button.styles'

export type Props = {
  primary?: boolean
}

export const Button: React.FC<Props> = ({ children, primary }) => {
  if (primary) {
    console.log('im primary')
  }

  return <StyledButton type="button">{children}</StyledButton>
}
