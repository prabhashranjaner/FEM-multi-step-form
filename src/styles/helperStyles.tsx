import { css } from "styled-components";

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexCenter = css`
  ${flexBetween}
  justify-content: center;
`;
