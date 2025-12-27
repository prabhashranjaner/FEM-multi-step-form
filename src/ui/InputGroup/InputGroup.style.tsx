import styled, { css } from "styled-components";
import { media } from "../../styles/style";

export const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span {
    ${media.desktop(css`
      font-size: 18px;
    `)}
  }
`;

export const Error = styled.span`
  color: var(--col-red);
  font-size: 12px;

  ${media.desktop(css`
    font-size: 16px;
  `)}
`;
