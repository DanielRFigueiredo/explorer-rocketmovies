import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import { Header } from '../../components/Header'
import { Container, Content } from './styles'
import { FiPlus } from 'react-icons/fi'

export function Home() {


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
          <Card title='Interestellar' nota={4} tags={["Ficção Científica", "Drama", "Família"]} >
            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade
              agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda
              com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto
            </p>
          </Card>
          <Card title='Interestellar' nota={4} tags={["Ficção Científica", "Drama", "Família"]} >
            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade
              agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda
              com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto
            </p>
          </Card>
          <Card title='Interestellar' nota={4} tags={["Ficção Científica", "Drama", "Família"]} >
            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade
              agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda
              com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto
            </p>
          </Card>
          <Card title='Interestellar' nota={4} tags={["Ficção Científica", "Drama", "Família"]} >
            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade
              agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda
              com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto
            </p>
          </Card>
          <Card title='Interestellar' nota={4} tags={["Ficção Científica", "Drama", "Família"]} >
            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade
              agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda
              com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto
            </p>
          </Card>

        </main>
      </Content>
    </Container>
  )
}