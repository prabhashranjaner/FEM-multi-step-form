import styled, { css } from "styled-components";
import { Card, Heading, media, SubHeading } from "../styles/style";
import InputGroup from "../ui/InputGroup";
import { useNavigate } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { UserType } from "../types/types";
import { NextButton, StyledNavigation } from "../styles/navigationStyles";
import useState from "../contexts/StateContext";
import useDispatch from "../contexts/DispatchContext";

const StyledHome = styled.form`
  ${media.laptop(css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `)}
`;

const InputGroupWrapper = styled.div`
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

const Input = styled.input`
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

const HomePage = () => {
  const state = useState();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    defaultValues: state.user !== null ? state.user : {},
  });

  const onSubmit: SubmitHandler<UserType> = (data) => {
    //! Stroing user info
    dispatch({ type: "user/add", payload: data });
    navigate("/select-plan");
  };
  return (
    <StyledHome onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <>
          <Heading>Personal Info</Heading>
          <SubHeading>
            Please provide your name, email address, and phone number.
          </SubHeading>
          <InputGroupWrapper>
            <InputGroup label="Name" error={errors.name}>
              <Input
                type="text"
                placeholder="e.g. Prabhash Ranjan"
                {...register("name", { required: true })}
              />
            </InputGroup>

            <InputGroup label="Email Address" error={errors.email}>
              <Input
                type="text"
                placeholder="e.g. prabhashranjan@example.com"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
              />
            </InputGroup>

            <InputGroup label="Phone Number" error={errors.phone}>
              <Input
                type="number"
                placeholder="e.g. 9090909090"
                {...register("phone", {
                  required: true,
                  pattern: /^[0-9]{10}$/g,
                  maxLength: 10,
                })}
                maxLength={10}
              />
            </InputGroup>
          </InputGroupWrapper>
        </>
      </Card>

      <StyledNavigation>
        <NextButton type="submit">Next Step</NextButton>
      </StyledNavigation>
    </StyledHome>
  );
};

export default HomePage;
