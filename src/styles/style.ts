import styled, { css } from "styled-components";
import type { RuleSet } from "styled-components/dist/types";
const sizes = {
  xs: "375px",
  sm: "576px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
};

export const media = {
  mobile: (inner: RuleSet<object>) => css`
    @media (min-width: ${sizes.xs}) {
      ${inner};
    }
  `,
  tablet: (inner: RuleSet<object>) => css`
    @media (min-width: ${sizes.sm}) {
      ${inner};
    }
  `,
  laptop: (inner: RuleSet<object>) => css`
    @media (min-width: ${sizes.md}) {
      ${inner};
    }
  `,
  desktop: (inner: RuleSet<object>) => css`
    @media (min-width: ${sizes.lg}) {
      ${inner};
    }
  `,
  largeDesktop: (inner: RuleSet<object>) => css`
    @media (min-width: ${sizes.xl}) {
      ${inner};
    }
  `,
};

export const Heading = styled.h1`
  color: var(--col-darkblue);
  font-size: 24px;

  ${media.desktop(css`
    font-size: 30px;
  `)}
`;

export const SubHeading = styled.p`
  color: var(--col-gray-4);
  font-size: 16px;
  line-height: 25px;

  ${media.desktop(css`
    font-size: 20px;
  `)}
`;

export const Card = styled.section`
  position: absolute;
  background-color: white;
  width: 90vw;
  max-width: 480px;
  left: 50%;
  top: -70px;
  transform: translateX(-50%);
  border-radius: 12px;
  box-shadow: 5px 5px 10px -5px var(--col-gray-4);
  padding: 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  ${media.laptop(css`
    position: relative;
    width: 100%;
    max-width: 100%;
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
    inset: 0;
    transform: none;
    padding: 0;
  `)}
`;

export const CardChild = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-block: 8px;

  ${media.desktop(css`
    gap: 1rem;
  `)}
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: var(--col-gray-1);
  padding: 1rem;
  gap: 1rem;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid transparent;

  &.active {
    border: 1px solid var(--col-blue);
  }

  &:hover {
    border: 1px solid var(--col-lightblue);
  }
`;
