import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 10px;
  background: ${({ theme, $isnew }) => $isnew ? 'tranparent' : theme.COLORS.BLACK_600};
  border: ${({ theme, $isnew }) => $isnew ? '3px dashed ' + theme.COLORS.GRAY_300 : 'none'};
  padding: 16px;
  display: inline-flex;
  gap: 16px;

  >input{
    border: none;
    background: none;
    color: ${({ theme, $isnew }) => $isnew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};

    
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
  }

  >button{
    background: none;
    border: none;

    svg{
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 22px;
    }
  }


`