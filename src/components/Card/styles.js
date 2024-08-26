import styled from 'styled-components'

export const Container = styled.section`
  border-radius: 16px;
  background: ${({ theme }) => theme.COLORS.PINK}0D;
  padding: 32px;

  >a{
    h2{
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-family: "Roboto Slab";
      font-size: 24px;
      font-weight: 700;
    }
  }
  
  >div:first-of-type{
    display: flex;
    gap: 6px;
    margin-top: 8px;

    svg{
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 12px;
    }}

  >div:last-of-type{
    margin-top: 35px;
    display: flex;
    gap: 8px;
  }

`