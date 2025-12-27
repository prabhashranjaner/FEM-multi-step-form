import { Link, useNavigate } from "react-router";
import { useEffect } from "react";
import {
  BackButton,
  NextButton,
  StyledNavigation,
} from "../../styles/navigationStyles";
import useState from "../../contexts/StateContext";
import {
  AddonText,
  StyledPage,
  SummaryItem,
  SummaryWrapper,
  TotalWrapper,
} from "./SummaryPage.style";
import { Card, Heading, SubHeading } from "../../styles/style";

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
        (acc, addon) => acc + addon.price.monthly,
        0
      );

    totalAmount = state.plan.price.monthly + addonsCost;
  }

  if (state.plan && state.paymentMode === "yearly") {
    let addonsCost = 0;
    if (state.addons.length > 0)
      addonsCost = state.addons.reduce(
        (acc, addon) => acc + addon.price.yearly,
        0
      );

    totalAmount = state.plan.price.yearly + addonsCost;
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
                    ? `${state.plan!.price.monthly}/mo`
                    : `${state.plan!.price.yearly}/yr`}{" "}
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
                          ? `${addon.price.monthly}/mo`
                          : `${addon.price.yearly}/yr`}{" "}
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
