import { Container } from './styles'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { createStars } from './createStars'
import { Tag } from '../Tag'
import { Link } from 'react-router-dom'

export default function Card({ children, title, nota = 0, tags, id }) {
  const stars = createStars(nota)
  return (
    <Container>
      <Link to={`/preview/${id}`}><h2>{title}</h2></Link>
      <div>
        {stars.map((star, index) => (
          <span key={index}>
            {star ? <FaStar /> : <FaRegStar />}
          </span>

        ))}

      </div>
      {children}
      <div>
        {tags.map(tag => <Tag key={tag.id} title={tag.name} />)}
      </div>
    </Container>
  )


}