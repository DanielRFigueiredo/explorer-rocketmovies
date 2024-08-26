import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  >main{
    flex: 1;
    margin-top: 40px;
    padding: 0 16px 40px;
    overflow: hidden;
  }

`;

export const Content = styled.div`
  margin: 0 auto ;
  width: min(100%, 1120px) ;
  height: 100%;
  overflow-y: scroll;

  >p{

    color: ${({ theme }) => theme.COLORS.WHITE_100};
    text-align: justify;
    font-family: "Roboto Slab";
    font-size: 16px;
    font-weight: 400;
    max-width: 99%;

    &:first-of-type{
      margin-top: 40px;
    }
  }
`



export const Title = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 18px;

  >h2{
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-family: "Roboto Slab";
    font-size: 36px;
    font-weight: 500;
  }
  >div{
    padding-top: 14.5px;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 20px;
    display: flex;
    gap: 8px;
  }

`;


export const Infos = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap:8px;
  >img{
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

  }

  >span{
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  >svg{
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;
    font-weight: 900;
  }

`;


export const Category = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;

`;

