import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  padding: 0 16px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  background: ${({ theme }) => theme.COLORS.BLACK_700};
`;

export const Content = styled.div`
  width: min(100%,1120px);
  margin: 0 auto;
  height: 116px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  >h1{
    font-family: "Roboto Slab";
    font-size: 24px;
    font-weight: 700;
    >a{
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  >div{
    text-align: right;

    h2{
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-family: "Roboto Slab";
      font-size: 14px;
      font-weight: 700;
      white-space: nowrap;
    }

    a{
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-family: "Roboto Slab";
      font-size: 14px;
    }
  }
   img{
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
  
`;