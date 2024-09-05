import { Link } from 'react-router-dom'

import { Input } from '../Input'

import { Container, Content, User } from './styles'
import { useUser } from '../../hooks/useUser'
import defaultAvatar from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'

export function Header() {
  const { user, signOut, handleSetTitle } = useUser()
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultAvatar


  return (
    <Container>
      <Content>
        <h1>
          <Link to="/">RocketMovies</Link>
        </h1>
        <Input
          placeholder='Pesquisar pelo titulo'
          onChange={e => handleSetTitle(e.target.value)}
        />
        <User>
          <div>
            <Link to="/profile"> <h2>Daniel Figueiredo</h2></Link>
            <button onClick={signOut}>sair</button>
          </div>
          <Link to="/profile"> <img src={avatarURL} alt="foto do usuário" /></Link>
        </User>

      </Content>

    </Container>
  )

}