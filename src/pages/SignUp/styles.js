import styled from 'styled-components'
import backgroundImg from '../../assets/background.jpg'

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
  width: 100%;

  >main{
    width: 640px;
    display: flex;
    align-items: center;


   



  }


`

export const Content = styled.div`
  width: 340px;
  margin: 0 auto;

  header{
    h1{
      color: ${({ theme }) => theme.COLORS.PINK};
      font-family: "Roboto Slab";
      font-size: 48px;
      font-weight: 700;
    }
    p{
      color: #CAC4CF;
      font-family: "Roboto Slab";
      font-size: 14px;
      font-weight: 400;
    }
  }

  h2{
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-family: "Roboto Slab";
    font-size: 24px;
    font-weight: 500;
    margin-top: 48px;
  }
`

export const Form = styled.form`
  margin-top: 48px;

  display: flex;
  flex-direction: column;

  >div + div{
    margin-top: 8px;
  }

  >button{
    margin-top: 16px;
  }

  >a{
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
    font-family: "Roboto Slab";
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    svg{
      font-size: 16px;
    }
  }

`

export const Background = styled.div`
  flex: 1;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;


`