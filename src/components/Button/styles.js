import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 10px;
  background: ${({ theme, $darkmode }) => $darkmode ? theme.COLORS.BLACK_900: theme.COLORS.PINK};

  color: ${({ theme, $darkmode }) => $darkmode ? theme.COLORS.PINK : theme.COLORS.GRAY_700};
  font-family: "Roboto Slab";
  font-size: 16px;
  font-weight: 500;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;


`