import styled, { css } from "styled-components";
import { Card, Heading, media, SubHeading } from "../styles/style";
import { Link, useNavigate } from "react-router";
import { useEffect } from "react";
import {
  BackButton,
  NextButton,
  StyledNavigation,
} from "../styles/navigationStyles";
import useState from "../contexts/StateContext";

const StyledPage = styled.div`
  ${media.laptop(css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `)}
`;

const SummaryWrapper = styled.div`
  background-color: var(--col-gray-2);
  padding: 0.3rem;
`;

const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  &.main {
    border-bottom: 1px solid var(--col-gray-3);
    font-size: 18px;
    p {
      font-weight: 700;
      font-size: 18px;
    }
  }

  & h4 {
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

const AddonText = styled.p`
  color: var(--col-gray-4);
`;

const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  font-size: 20px;
  color: var(--col-gray-4);

  & p.price {
    font-weight: 700;
    color: var(--col-blue);
  }
`;

function formateText(str: string | undefined) {
  if (str === undefined || str.length === 0) {
    return ""; // Handle empty string case
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// !=============Componenr
const SummaryPage = () => {
  const navigate = useNavigate();
  const state = useState();

  let totalAmount = 0;
  if (state.plan && state.paymentMode === "monthly") {
    let addonsCost = 0;
    if (state.addons.length > 0)
      addonsCost = state.addons.reduce(
        (acc, addon) => acc + Number(addon.monthly),
        0
      );

    totalAmount = Number(state.plan.monthly) + addonsCost;
  }

  if (state.plan && state.paymentMode === "yearly") {
    let addonsCost = 0;
    if (state.addons.length > 0)
      addonsCost = state.addons.reduce(
        (acc, addon) => acc + Number(addon.yearly),
        0
      );

    totalAmount = Number(state.plan.yearly) + addonsCost;
  }

  useEffect(() => {
    if (state.plan === null) navigate("/select-plan");
  }, [navigate, state.plan]);

  return (
    <StyledPage>
      <Card>
        <>
          <Heading>Finishing up</Heading>
          <SubHeading>
            Double-check everything looks OK before confirming
          </SubHeading>
          {state.plan && (
            <SummaryWrapper>
              <SummaryItem className="main">
                <div>
                  <h4>
                    {formateText(state.plan?.name)}(
                    {formateText(state.paymentMode)})
                  </h4>
                  <Link to="/select-plan">Change</Link>
                </div>
                <p>
                  {" "}
                  +$
                  {state.paymentMode === "monthly"
                    ? `${state.plan!.monthly}/mo`
                    : `${state.plan!.yearly}/yr`}{" "}
                </p>
              </SummaryItem>
              {state.addons.length > 0 &&
                state.addons.map((addon) => {
                  return (
                    <SummaryItem key={addon.id}>
                      <AddonText>{addon.name}</AddonText>{" "}
                      <p>
                        +$
                        {state.paymentMode === "monthly"
                          ? `${addon.monthly}/mo`
                          : `${addon.yearly}/yr`}{" "}
                      </p>
                    </SummaryItem>
                  );
                })}
            </SummaryWrapper>
          )}

          <TotalWrapper>
            <p>Total(per month)</p>
            <p className="price">
              +${totalAmount}/{state.paymentMode === "monthly" ? "mo" : "yr"}
            </p>
          </TotalWrapper>
        </>
      </Card>
      <StyledNavigation>
        <BackButton onClick={() => navigate("/add-ons")}>Go Back</BackButton>
        <NextButton className="final" onClick={() => navigate("/thank-you")}>
          Confirm
        </NextButton>
      </StyledNavigation>
    </StyledPage>
  );
};

export default SummaryPage;
