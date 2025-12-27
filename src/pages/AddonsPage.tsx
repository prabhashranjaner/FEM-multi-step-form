import data from "../data.json";
import styled, { css } from "styled-components";
import { Card, Heading, List, media, SubHeading } from "../styles/style";
import { useNavigate } from "react-router";
import AddonItem from "../ui/AddonItem/AddonItem";
import {
  BackButton,
  NextButton,
  StyledNavigation,
} from "../styles/navigationStyles";

const StyledPage = styled.div`
  ${media.laptop(css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `)}
`;

const AddonsList = styled(List)``;

const AddonsPage = () => {
  const navigate = useNavigate();
  return (
    <StyledPage>
      <Card>
        <>
          <Heading>Pick add-ons</Heading>
          <SubHeading>Add-ons help enhance your gaming experience.</SubHeading>
          <AddonsList>
            {data.addons.map((item) => (
              <AddonItem key={item.id} item={item} />
            ))}
          </AddonsList>
        </>
      </Card>
      <StyledNavigation>
        <BackButton onClick={() => navigate("/select-plan")}>
          Go Back
        </BackButton>
        <NextButton onClick={() => navigate("/summary")}>Next Step</NextButton>
      </StyledNavigation>
    </StyledPage>
  );
};

export default AddonsPage;
