import styled, { css } from "styled-components";
import { List, media } from "../../styles/style";

export const StyledPlanPage = styled.div`
  ${media.laptop(css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `)}
`;

export const PlanList = styled(List)``;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--col-gray-2);
  padding: 0.8rem;

  ${media.desktop(css`
    gap: 2rem;
  `)}
`;

export const ToggleLabel = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: var(--col-gray-4);

  &.active {
    color: var(--col-darkblue);
  }

  ${media.desktop(css`
    font-size: 18px;
  `)}
`;
