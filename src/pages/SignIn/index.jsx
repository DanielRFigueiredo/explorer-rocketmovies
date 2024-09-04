import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../hooks/useUser'

import { FiLock } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Background, Form, Content } from './styles'


export function SignIn() {
  const { signIn } = useUser()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignIn() {
    if (!email || !password) {
      alert('email e senha são obrigatórios')
      return
    }

    signIn({ email, password })
  }

  return (
    <Container>
      <main>
        <Content>
          <header>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>
          </header>
          <h2>Faça seu login</h2>
          <Form onSubmit={e => e.preventDefault()}>
            <Input
              placeholder="E-mail" type="text" icon={MdOutlineEmail}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              placeholder="Senha" type="password" icon={FiLock}
              onChange={e => setPassword(e.target.value)}
            />

            <Button title={'Entrar'} type="submit" onClick={handleSignIn} />
            <Link to="/register">Criar conta</Link>
          </Form>


        </Content>
      </main>

      <Background />

    </Container>
  )
}