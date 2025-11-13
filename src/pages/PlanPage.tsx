import data from "../data.json";
import styled, { css } from "styled-components";
import { Card, Heading, List, media, SubHeading } from "../styles/style";
import PlanItem from "../ui/PlanItem";
import ToggleSwitch from "../ui/ToggleSwitch";
import { useNavigate } from "react-router";
import { useData } from "../contexts/DataContextProvider";
import {
  BackButton,
  NextButton,
  StyledNavigation,
} from "../styles/navigationStyles";

const StyledPlanPage = styled.div`
  ${media.laptop(css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `)}
`;

const PlanList = styled(List)``;

const ToggleWrapper = styled.div`
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

const ToggleLabel = styled.span`
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

const PlanPage = () => {
  const navigate = useNavigate();
  const { state } = useData();
  return (
    <StyledPlanPage>
      <Card>
        <>
          <Heading>Select your plan</Heading>
          <SubHeading>
            You have the option of monthly or yearly billing.
          </SubHeading>
          <PlanList>
            {data.plans.map((item) => (
              <PlanItem key={item.id} item={item} />
            ))}
          </PlanList>
          <ToggleWrapper>
            <ToggleLabel
              className={`${state.paymentMode === "monthly" ? "active" : ""}`}
            >
              Monthly
            </ToggleLabel>
            <ToggleSwitch />
            <ToggleLabel
              className={`${state.paymentMode === "yearly" ? "active" : ""}`}
            >
              Yearly
            </ToggleLabel>
          </ToggleWrapper>
        </>
      </Card>
      <StyledNavigation>
        <BackButton onClick={() => navigate("/")}>Go Back</BackButton>
        <NextButton
          onClick={() => navigate("/add-ons")}
          disabled={state.plan === null}
        >
          Next Step
        </NextButton>
      </StyledNavigation>
    </StyledPlanPage>
  );
};

export default PlanPage;
