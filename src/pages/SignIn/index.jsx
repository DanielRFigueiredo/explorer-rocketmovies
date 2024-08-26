import { Link } from 'react-router-dom'
import { FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { MdOutlineEmail } from 'react-icons/md'
import { Button } from '../../components/Button'

import { Container, Background, Form, Content } from './styles'


export function SignIn() {
  return (
    <Container>
      <main>
        <Content>
          <header>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>
          </header>
          <h2>Faça seu login</h2>
          <Form>
            <Input placeholder="E-mail" type="text" icon={MdOutlineEmail} />
            <Input placeholder="Senha" type="password" icon={FiLock} />

            <Button title={'Entrar'} type="submit" />
            <Link to="/register">Criar conta</Link>
          </Form>


        </Content>
      </main>

      <Background />

    </Container>
  )
}