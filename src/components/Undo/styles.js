import styled from "styled-components";

export const Container = styled.button`
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    gap:8px;
    background: none;
    border: none;
`;