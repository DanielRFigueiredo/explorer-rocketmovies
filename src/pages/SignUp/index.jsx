import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Background, Form, Content } from './styles'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navegate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      alert('Preencha todos os campos')

    }

    api.post('/user', { name, email, password })
      .then(resp => {
        alert('Usuário criado com sucesso')
        navegate('/')
      }).catch(err => {
        if (err.response) {
          alert(err.response.data.message)
        } else {
          console.log(err)
          alert('não foi possivel fazer o cadastro')
        }
      })
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
              placeholder="Nome" type="text" icon={FiUser}
              onChange={e => setName(e.target.value)}
            />
            <Input
              placeholder="E-mail" type="text" icon={MdOutlineEmail}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              placeholder="Senha" type="password" icon={FiLock}
              onChange={e => setPassword(e.target.value)}
            />

            <Button title={'Cadastrar'} type="submit" onClick={handleSignUp} />
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