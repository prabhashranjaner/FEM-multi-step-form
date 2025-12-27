import styled from "styled-components";

export const StyledToggleSwitch = styled.label`
  width: 50px;
  height: 25px;
  position: relative;
`;

export const CustomCheckBox = styled.div`
  position: absolute;
  top: 0;
  background-color: var(--col-darkblue);
  width: 100%;
  height: 100%;
  border-radius: 50px;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    top: 2px;
    left: 3px;
    transition: transform 0.3s;
  }
`;

export const HiddenInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${CustomCheckBox}::after {
    left: auto;
    right: 3px;
  }
`;
