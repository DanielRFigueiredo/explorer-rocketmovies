import styled from 'styled-components'

export const Container = styled.textarea`
  height: 274px;
  width: 100%;
  padding: 19px 16px;

  border-radius: 10px;
  background: #262529;
  resize: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.WHITE_100};
  font-family: "Roboto Slab";
  font-size: 16px;
  font-weight: 400;

  &::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`