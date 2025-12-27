import styled, { css } from "styled-components";
import { Card, media } from "../../styles/style";

export const StyledCard = styled(Card)`
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

export const ImageWrapper = styled.div``;
