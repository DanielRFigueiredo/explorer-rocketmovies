import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useUser } from '../../hooks/useUser'

import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Undo } from '../../components/Undo'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Genres } from '../../components/Genres'
import { Button } from '../../components/Button'

import { Container, Content, Form, Markers, AreaButtons } from './styles'

export function Create() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')
  const [input, setInput] = useState('')
  const [tags, setTags] = useState([])

  const { handleAddMovie } = useUser()
  const navigate = useNavigate()

  function removeTag(tag) {
    setTags(prev => prev.filter(t => t !== tag))
  }

  function addTag() {
    if (!input) return
    if (tags.includes(input)) return
    setTags(prev => [...prev, input])
    setInput('')
  }


  function handleSubmit() {
    if (!title || !rating || !description) {
      return
    }

    if (input) {
      alert('Input com dados não registrados, você pode adicionar no botão de + ou apagar os dados dele para salvar')
      return
    }

    handleAddMovie({ title, rating, description, tags })
    navigate('/')
  }

  function handleReset() {
    setTitle('')
    setRating('')
    setDescription('')
    setTags([])
    setInput('')

  }

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <Undo title='Voltar' url={'/'} icon={FiArrowLeft} />
          <h2>Novo Filme</h2>
          <Form onSubmit={e => e.preventDefault()} >
            <div>
              <Input
                placeholder='Título' type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <Input
                placeholder='Sua nota (de 0 a 5)' type='number' min='0' max='5'
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              />
            </div>
            <Textarea
              placeholder='Observações'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <Markers>
              <h3>Marcadores</h3>
              <div>
                {
                  tags && tags.map(tag => (
                    <Genres key={tag} value={tag} fn={removeTag} />
                  ))
                }
                <Genres
                  placeholder='Novo Marcador' isNew value={input}
                  onChange={e => setInput(e.target.value)}
                  fn={addTag}
                />

              </div>
            </Markers>
            <AreaButtons >
              <Button title='Excluir Filme' darkMode onClick={handleReset} />
              <Button title='Salvar' onClick={handleSubmit} />

            </AreaButtons>
          </Form>

        </Content>
      </main>
    </Container>
  )
}