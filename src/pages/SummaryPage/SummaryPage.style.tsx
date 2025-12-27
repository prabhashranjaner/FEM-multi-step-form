import styled, { css } from "styled-components";
import { media } from "../../styles/style";

export const StyledPage = styled.div`
  ${media.laptop(css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `)}
`;

export const SummaryWrapper = styled.div`
  background-color: var(--col-gray-2);
  padding: 0.3rem;
`;

export const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  &.main {
    border-bottom: 1px solid var(--col-gray-3);
    font-size: 18px;
    p {
      font-weight: 700;
      font-size: 18px;
    }
  }

  & h4 {
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

export const AddonText = styled.p`
  color: var(--col-gray-4);
`;

export const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  font-size: 20px;
  color: var(--col-gray-4);

  & p.price {
    font-weight: 700;
    color: var(--col-blue);
  }
`;
