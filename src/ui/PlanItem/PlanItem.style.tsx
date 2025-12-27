import styled, { css } from "styled-components";
import { media } from "../../styles/style";

export const StyledPlanItem = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--col-gray-1);
  padding: 1rem;
  gap: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;

  &.active {
    border: 2px solid var(--col-blue);
  }

  &:hover {
    border: 2px solid var(--col-lightblue);
  }

  ${media.desktop(css`
    gap: 1rem;
  `)}
`;


export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & h3 {
    font-size: 16px;
  }

  & p {
    color: var(--col-gray-4);
    font-size: 14px;
  }

  ${media.laptop(css`
    & h3 {
      font-size: 18px;
    }
  `)}

  & p {
    font-size: 14px;
  }
`;
