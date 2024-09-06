import { Container } from './styles'
import { useNavigate } from 'react-router-dom'

export function Undo({ title, url, icon: Icon }) {
  const navigate = useNavigate()
  return (
    <Container onClick={() => navigate(-1)}>
      {Icon && <Icon />}
      {title}
    </Container>
  )

}