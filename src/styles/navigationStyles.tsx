import styled, { css } from "styled-components";
import { media } from "./style";

export const StyledNavigation = styled.section`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  ${media.laptop(css`
    position: relative;
    width: 100%;
    max-width: 100%;
    background-color: transparent;
    margin-top: auto;
  `)}
`;

export const Button = styled.button`
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    filter: brightness(120%);
  }

  &:active {
    transform: translateY(3px);
  }

  &:disabled {
    cursor: not-allowed;
    filter: brightness(50%);
    pointer-events: none;
  }

  ${media.desktop(css`
    font-size: 16px;
  `)}
`;

export const BackButton = styled(Button)`
  background-color: transparent;
  color: var(--col-gray-4);
  font-weight: 700;
`;

export const NextButton = styled(Button)`
  background-color: var(--col-darkblue);
  color: white;
  padding: 12px 20px;
  border-radius: 5px;
  margin-left: auto;

  &.final {
    background-color: var(--col-blue);
  }
`;
