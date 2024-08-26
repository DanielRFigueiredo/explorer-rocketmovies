import styled from 'styled-components'


export const Container = styled.div`
 
  >main{
    padding: 0 16px;
    margin-top: 40px;

  }

`
export const Content = styled.div`
  width: min(100%, 1120px) ;
  margin: 0 auto ;

  >h2{
    margin-top: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-family: "Roboto Slab";
    font-size: 36px;
    font-weight: 500;
  }

`
export const Form = styled.form`
margin-top: 40px;
  >div:first-child{
    display: flex;
    gap: 40px;
  }

  >textarea{
    margin-top: 40px;
  }
`

export const Marcadores = styled.div`
  margin-top: 40px;
  >h3{
    color: var(--Gray, #999591);
    font-family: "Roboto Slab";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  >div{
    margin-top: 24px;
    display: flex;
    gap: 24px;
    background-color: ${({ theme }) => theme.COLORS.BLACK_900};
    padding: 16px;
    border-radius: 8px;
    flex-wrap: wrap;
    
  }

`


export const AreaButtons = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 40px;
`