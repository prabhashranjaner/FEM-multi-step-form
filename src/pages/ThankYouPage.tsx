import styled, { css } from "styled-components";
import { Card, media } from "../styles/style";

const StyledCard = styled(Card)`
  align-items: center;
  padding: 5rem 4rem;
  gap: 1.5rem;

  h2 {
    font-size: 32px;
    color: var(--col-darkblue);

    ${media.desktop(css`
      font-size: 36px;
    `)}
  }

  p {
    font-size: 20px;
    color: var(--col-gray-4);
    line-height: 35px;
    text-align: center;

    ${media.desktop(css`
      font-size: 22px;
    `)}
  }
`;

const ImageWrapper = styled.div``;

const ThankYouPage = () => {
  return (
    <div>
      <StyledCard>
        <ImageWrapper>
          <img alt="icon" src="/images/icon-thank-you.svg" />
        </ImageWrapper>
        <h2>Thank you!</h2>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </StyledCard>
    </div>
  );
};

export default ThankYouPage;
