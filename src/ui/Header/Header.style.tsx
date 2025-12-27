import styled, { css } from "styled-components";
import { media } from "../../styles/style";

export const StyledHeader = styled.header`
  background-image: url(/images/bg-sidebar-mobile.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 25%;
  display: grid;
  justify-items: center;

  ${media.laptop(css`
    border-radius: 12px;
    background-image: url(/images/bg-sidebar-desktop.svg);
    background-size: cover;
    padding: 1rem;
    justify-items: left;
  `)}

  ${media.desktop(css``)}
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  list-style: none;

  ${media.laptop(css`
    flex-direction: column;
    gap: 2rem;
  `)}
`;
