import styled, { css } from "styled-components";
import { media } from "../../styles/style";

export const StyledCheckBox = styled.label`
  position: relative;
  width: 30px;
  height: 25px;
`;

const CustomCheckbox = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 4px;
  border: 1px solid var(--col-gray-3);

  &:hover {
    background-color: var(--col-gray-2);
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 4px;
    width: 8px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);

    ${media.desktop(css`
      left: 9px;
      top: 3px;
    `)}
  }
`;

export const HiddenCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${CustomCheckbox} {
    background-color: var(--col-blue);
  }

  &:checked + ${CustomCheckbox}::after {
    display: block;
  }
`;
