import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Undo } from '../../components/Undo'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Genres } from '../../components/Genres'
import { Button } from '../../components/Button'


import { Container, Content, Form, Marcadores, AreaButtons } from './styles'  

export function Create() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <Undo title='Voltar' url={'/'} icon={FiArrowLeft} />
          <h2>Novo Filme</h2>
          <Form >
            <div>
              <Input placeholder='Título' type='text' />
              <Input placeholder='Sua nota (de 0 a 5)' type='number' min='0' max='5' />
            </div>
            <Textarea placeholder='Observações' />
            <Marcadores>
              <h3>Marcadores</h3>
              <div>
                <Genres value='Drama' />
                <Genres placeholder='Novo Marcador' isNew />
              </div>
            </Marcadores>
            <AreaButtons >
              <Button title='Excluir Filme' darkMode />
              <Button title='Salvar' />

            </AreaButtons>
          </Form>

        </Content>
      </main>
    </Container>
  )
}