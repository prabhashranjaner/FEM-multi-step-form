import styled, { css } from "styled-components";
import { media } from "../../styles/style";

export const StyledHome = styled.form`
  ${media.laptop(css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `)}
`;

export const InputGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${media.laptop(css`
    gap: 2rem;
  `)}

  ${media.desktop(css`
    margin-top: 20pxaa;
  `)}
`;

export const Input = styled.input`
  padding: 0.6rem 1rem;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
  border: 1px solid var(--col-gray-3);
  font-weight: 500;

  &::placeholder {
    color: var(--col-gray-4);
  }

  ${media.desktop(css`
    padding: 1rem;
  `)}
`;
