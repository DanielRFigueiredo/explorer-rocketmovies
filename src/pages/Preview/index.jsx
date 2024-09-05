import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../services/api";
import { formatDate } from "../../utils/formatDate";
import { useUser } from "../../hooks/useUser";

import { FaStar, FaRegStar } from 'react-icons/fa'
import { FiArrowLeft } from 'react-icons/fi'
import { LuClock3 } from "react-icons/lu";
import defaultAvatar from '../../assets/avatar_placeholder.svg'


import { Header } from "../../components/Header";
import { Undo } from "../../components/Undo";
import { Tag } from '../../components/Tag'

import { createStars } from "../../components/Card/createStars";

import { Container, Title, Infos, Category, Content } from "./styles";

export function Preview() {
  const [movie, setMovie] = useState({})
  const { user } = useUser()
  const { id } = useParams()
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultAvatar
  const stars = createStars(movie.rating)
  


  useEffect(() => {
    async function getMovie() {
      const resp = await api.get(`/notes/${id}`)
      setMovie(resp.data)
    }
    getMovie()

  }, [id])

  const date = formatDate(movie.updated_at)


  return (
    <Container>
      <Header />
      <main>
        <Content>
          <Undo title='Voltar' url={'/'} icon={FiArrowLeft} />
          <header>
            <Title>
              <h2>{movie.title}</h2>


              {stars.map((star, index) => (
                <div key={index}>
                  {star ? <FaStar /> : <FaRegStar />}
                </div>

              ))}
            </Title>
            <Infos>
              <img src={avatarURL} alt="imagem do usuario" />
              <span>Por Daniel Figueiredo</span>
              <LuClock3 />
              <span>{date}</span>
            </Infos>
            {movie.tags &&
              <Category>
                {movie.tags.map(tag => (
                  <Tag key={tag.id} title={tag.name} />
                ))}
              </Category>
            }
          </header>
          <p>
            {movie.description}
          </p>



        </Content>
      </main>

    </Container>
  )

}