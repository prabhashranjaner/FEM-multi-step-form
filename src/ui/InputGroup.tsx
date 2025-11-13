import type { ReactNode } from "react";
import type { FieldError } from "react-hook-form";
import styled, { css } from "styled-components";
import { media } from "../styles/style";

const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span {
    ${media.desktop(css`
      font-size: 18px;
    `)}
  }
`;

const Error = styled.span`
  color: var(--col-red);
  font-size: 12px;

  ${media.desktop(css`
    font-size: 16px;
  `)}
`;

const InputGroup = ({
  label,
  error,

  children,
}: PropsType) => {
  return (
    <StyledInputGroup>
      <Top>
        <span>{label}</span>
        {error && error.type === "required" && (
          <Error>{label} is required!</Error>
        )}
        {error && error.type === "pattern" && (
          <Error>Enter a valid {label}</Error>
        )}
        {error && error.type === "maxLength" && (
          <Error>Enter a valid {label}</Error>
        )}
      </Top>

      {children}
    </StyledInputGroup>
  );
};

export default InputGroup;

type PropsType = {
  label: string;
  error: FieldError | undefined;
  children: ReactNode;
};
