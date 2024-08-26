import { Link } from 'react-router-dom'
import { FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Background, Form, Content } from './styles'

export function SignUp() {
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
            <Input placeholder="Nome" type="text" icon={FiUser} />
            <Input placeholder="E-mail" type="text" icon={MdOutlineEmail} />
            <Input placeholder="Senha" type="password" icon={FiLock} />

            <Button title={'Cadastrar'} type="submit" />
            <Link to="/">
              <FiArrowLeft />
              Voltar para login
            </Link>
          </Form>


        </Content>
      </main>

      <Background />

    </Container>
  )
}