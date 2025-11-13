import styled, { css } from "styled-components";
import { ListItem, media } from "../styles/style";
import type { AddonsType } from "../types/types";
import { useData } from "../contexts/DataContextProvider";
import CheckBox from "./CheckBox";

const StyledAddonItem = styled(ListItem)`
  padding: 0.5rem;
  gap: 1rem;

  ${media.desktop(css`
    gap: 1.5rem;
    padding: 1rem;
  `)}
`;

const Details = styled.div`
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

const Price = styled.p`
  font-size: 14px;

  ${media.desktop(css`
    font-size: 16px;
  `)}
`;

const AddonItem = ({ item }: PropsType) => {
  const { state } = useData();
  const price =
    state.paymentMode === "monthly"
      ? `${item.monthly}/mo`
      : `${item.yearly}/yr`;

  const isActive =
    state.addons?.filter((addon) => addon.id === item.id).length > 0;
  return (
    <StyledAddonItem className={`${isActive ? "active" : ""}`}>
      <CheckBox item={item} />
      <Details>
        <h3>{item.name}</h3>
        <p>{item.detail}</p>
      </Details>
      <Price>+${price}</Price>
    </StyledAddonItem>
  );
};

export default AddonItem;

type PropsType = { item: AddonsType };
