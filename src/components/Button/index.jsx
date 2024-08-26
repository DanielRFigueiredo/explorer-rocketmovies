import { Container } from './styles'


export function Button({ title, darkMode = false, ...rest }) {
  return (
    <Container $darkmode={darkMode} {...rest}>
      {title}
    </Container>
  )
}