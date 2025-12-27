import type { PlanDataType } from "../../types/types";
import useState from "../../contexts/StateContext";
import useDispatch from "../../contexts/DispatchContext";
import { Detail, StyledPlanItem } from "./PlanItem.style";

const PlanItem = ({ item }: PropsType) => {
  const state = useState();
  const dispatch = useDispatch();

  const price =
    state.paymentMode === "monthly"
      ? `${item.price.monthly}/ mo`
      : `${item.price.yearly}/yr`;
  return (
    <StyledPlanItem
      onClick={() => dispatch({ type: "plan/add", payload: item })}
      className={`${item.id === state.plan?.id ? "active" : ""}`}
    >
      <img alt="icon" src={`/images/icon-${item.icon}`} />
      <Detail>
        <h3>{item.name}</h3>
        <p>${price}</p>
      </Detail>
    </StyledPlanItem>
  );
};

export default PlanItem;

type PropsType = { item: PlanDataType };
