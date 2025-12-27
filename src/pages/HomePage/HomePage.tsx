import { Card, Heading, SubHeading } from "../../styles/style";
import InputGroup from "../../ui/InputGroup/InputGroup";
import { useNavigate } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { UserType } from "../../types/types";
import { NextButton, StyledNavigation } from "../../styles/navigationStyles";
import useState from "../../contexts/StateContext";
import useDispatch from "../../contexts/DispatchContext";
import { Input, InputGroupWrapper, StyledHome } from "./HomePage.style";

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
