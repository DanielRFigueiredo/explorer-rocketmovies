import { Link } from 'react-router-dom'

import { Input } from '../Input'

import { Container, Content, User } from './styles'
import { useUser } from '../../hooks/useUser'

export function Header() {
  const { signOut } = useUser()
  return (
    <Container>
      <Content>
        <h1>
          <Link to="/">RocketMovies</Link>
        </h1>
        <Input placeholder='Pesquisar pelo titulo' />
        <User>
          <div>
            <Link to="/profile"> <h2>Daniel Figueiredo</h2></Link>
            <button onClick={signOut}>sair</button>
          </div>
          <Link to="/profile"> <img src="https://randomuser.me/api/portraits/men/18.jpg" alt="foto do usuário" /></Link>
        </User>

      </Content>

    </Container>
  )

}