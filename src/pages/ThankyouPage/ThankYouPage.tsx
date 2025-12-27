import { ImageWrapper, StyledCard } from "./ThankYouPage.style";

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
