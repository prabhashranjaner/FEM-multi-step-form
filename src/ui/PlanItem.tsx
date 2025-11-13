import styled, { css } from "styled-components";
import type { PlanDataType } from "../types/types";
import { useData } from "../contexts/DataContextProvider";
import { media } from "../styles/style";

const StyledPlanItem = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--col-gray-1);
  padding: 1rem;
  gap: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;

  &.active {
    border: 2px solid var(--col-blue);
  }

  &:hover {
    border: 2px solid var(--col-lightblue);
  }

  ${media.desktop(css`
    gap: 1rem;
  `)}
`;

const Image = styled.img``;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & h3 {
    font-size: 16px;
  }

  & p {
    color: var(--col-gray-4);
    font-size: 14px;
  }

  ${media.laptop(css`
    & h3 {
      font-size: 18px;
    }
  `)}

  & p {
    font-size: 14px;
  }
`;
const PlanItem = ({ item }: PropsType) => {
  const { state, dispatch } = useData();

  const price =
    state.paymentMode === "monthly"
      ? `${item.monthly}/ mo`
      : `${item.yearly}/yr`;
  return (
    <StyledPlanItem
      onClick={() => dispatch({ type: "plan/add", payload: item })}
      className={`${item.id === state.plan?.id ? "active" : ""}`}
    >
      <Image alt="icon" src={`/public/images/icon-${item.icon}`} />
      <Detail>
        <h3>{item.name}</h3>
        <p>${price}</p>
      </Detail>
    </StyledPlanItem>
  );
};

export default PlanItem;

type PropsType = { item: PlanDataType };
