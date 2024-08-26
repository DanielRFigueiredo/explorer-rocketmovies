import { Container } from './styles'


export function Undo({ title, url, icon: Icon }) {
  return (
    <Container to={url}>
      {Icon && <Icon />}
      {title}
    </Container>
  )

}