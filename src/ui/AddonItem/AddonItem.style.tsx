import styled, { css } from "styled-components";
import { ListItem, media } from "../../styles/style";

export const StyledAddonItem = styled(ListItem)`
  padding: 0.5rem;
  gap: 1rem;

  ${media.desktop(css`
    gap: 1.5rem;
    padding: 1rem;
  `)}
`;

export const Details = styled.div`
  flex-grow: 1;

  h3 {
    margin-bottom: 6px;
    color: var(--col-darkblue);
    font-size: 16px;
  }
  p {
    color: var(--col-gray-4);
    font-size: 14px;
  }

  ${media.desktop(css`
    h3 {
      font-size: 18px;
    }

    p {
      font-size: 16px;
    }
  `)}
`;

export const Price = styled.p`
  font-size: 14px;

  ${media.desktop(css`
    font-size: 16px;
  `)}
`;
