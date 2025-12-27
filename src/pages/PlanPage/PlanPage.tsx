import data from "../../data.json";
import PlanItem from "../../ui/PlanItem/PlanItem";
import ToggleSwitch from "../../ui/ToggleSwitch/ToggleSwitch";
import { useNavigate } from "react-router";
import {
  BackButton,
  NextButton,
  StyledNavigation,
} from "../../styles/navigationStyles";
import useState from "../../contexts/StateContext";
import {
  PlanList,
  StyledPlanPage,
  ToggleLabel,
  ToggleWrapper,
} from "./PlanPage.style";
import { Card, Heading, SubHeading } from "../../styles/style";

const PlanPage = () => {
  const navigate = useNavigate();
  const state = useState();

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
