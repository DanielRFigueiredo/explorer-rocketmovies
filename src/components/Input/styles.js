import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLACK_600};
  gap: 16px;
  padding: 0 16px;
  border-radius: 10px;

  >svg{
    width: 20px;
    height: 18px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
  
  input{
    width: 100%;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-family: "Roboto Slab";
    font-size: 16px;
    font-weight: 400;



    &::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_300};


    }
  }

`