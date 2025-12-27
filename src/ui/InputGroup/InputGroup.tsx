import type { ReactNode } from "react";
import type { FieldError } from "react-hook-form";
import { Error, StyledInputGroup, Top } from "./InputGroup.style";

type PropsType = {
  label: string;
  error: FieldError | undefined;
  children: ReactNode;
};

const InputGroup = ({ label, error, children }: PropsType) => {
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
