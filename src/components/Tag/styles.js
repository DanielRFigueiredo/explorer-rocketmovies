import styled from 'styled-components'


export const Container = styled.span`
  background: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.WHITE_200};
  display: inline-block;
  
  white-space: nowrap;

  height: 24px;
  border-radius: 8px;
  padding: 5px 16px;

  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;

`