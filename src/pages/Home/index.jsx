import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useUser } from '../../hooks/useUser'
import { api } from '../../services/api'

import { FiPlus } from 'react-icons/fi'

import Card from '../../components/Card'
import { Header } from '../../components/Header'

import { Container, Content } from './styles'

export function Home() {
  const { user, title } = useUser()

  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getMovies() {
      const resp = await api.get(`/notes?title=${title}`,)
      setMovies(resp.data)
    }
    getMovies()

  }, [title])

  return (
    <Container>
      <Header />
      <Content>
        <header>
          <h1>Meus filmes</h1>
          <Link to="/create">
            <FiPlus />
            Adicionar filme
          </Link>
        </header>
        <main>
          {
            movies &&
            movies.map(movie => (
              <Card
                key={movie.id}
                id={movie.id}
                title={movie.title}
                nota={movie.rating}
                tags={movie.tags} >
                <p>
                  {movie.description}
                </p>
              </Card>
            ))
          }


        </main>
      </Content>
    </Container>
  )
}