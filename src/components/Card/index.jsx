import { Container } from './styles'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { createStars } from './createStars'
import { Tag } from '../Tag'
import { Link } from 'react-router-dom'

export default function Card({ children, title, nota = 0, tags }) {
  const stars = createStars(nota)
  return (
    <Container>
      <Link to="/preview"><h2>{title}</h2></Link>
      <div>
        {stars.map((star, index) => (
          <span key={index}>
            {star ? <FaStar /> : <FaRegStar />}
          </span>

        ))}

      </div>
      {children}
      <div>
        {tags.map((tag, index) => <Tag key={index} title={tag} />)}
      </div>
    </Container>
  )


}