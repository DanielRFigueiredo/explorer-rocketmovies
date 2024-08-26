import styled from 'styled-components'


export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  flex: 1;
  width: 100%;
  padding: 0 16px; 
  margin: 48px 0;
  display: grid;
  grid-template-rows:max-content 1fr;
  grid-template-areas: 
  "header"
  "main";
  overflow: hidden;

  
  >header{
    grid-area: header;
    width: min(100%, 1120px) ;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
      color: #FFF;
      font-family: "Roboto Slab";
      font-size: 32px;
      font-weight: 400;
    }

    a{

      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 0 32px;

      color: #1C1B1E;
      font-family: "Roboto Slab";
      font-size: 16px;
      font-weight: 400;

      border-radius: 8px;
      background: ${({ theme }) => theme.COLORS.PINK};



      svg{
        font-size: 16px;
      }
    }

  }

  >main{
    grid-area: main;
    overflow: auto;

    width: min(100%, 1120px) ;
    margin: 38px auto 0;
  >section{
    margin-top: 38px;

    &:first-child{
      margin-top: 0;
    }
    p{
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-family: Roboto;
      font-size: 16px;
      margin-top: 16px;
      
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  
  
}
 
`