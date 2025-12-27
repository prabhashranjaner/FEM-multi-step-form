import type { AddonsType } from "../../types/types";
import CheckBox from "../Checkbox/CheckBox";
import useState from "../../contexts/StateContext";
import { Details, Price, StyledAddonItem } from "./AddonItem.style";

const AddonItem = ({ item }: PropsType) => {
  const state = useState();
  const price =
    state.paymentMode === "monthly"
      ? `${item.price.monthly}/mo`
      : `${item.price.yearly}/yr`;

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
