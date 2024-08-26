import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    gap:8px;
`;