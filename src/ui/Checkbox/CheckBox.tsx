import type { AddonsType } from "../../types/types";
import useState from "../../contexts/StateContext";
import useDispatch from "../../contexts/DispatchContext";
import { HiddenCheckbox, StyledCheckBox } from "./CheckBox.style";
import { CustomCheckBox } from "../ToggleSwitch/ToggleSwitch.style";

const CheckBox = ({ item }: { item: AddonsType }) => {
  const state = useState();
  const dispatch = useDispatch();

  const isPresent =
    state.addons.length > 0 &&
    state.addons.filter((addon) => addon.id === item.id).length > 0;

  const handleCheck = () => {
    if (isPresent) dispatch({ type: "addons/remove", payload: item.id });
    else dispatch({ type: "addons/add", payload: item });
  };

  return (
    <StyledCheckBox>
      <HiddenCheckbox
        type="checkbox"
        checked={isPresent}
        onChange={handleCheck}
      />
      <CustomCheckBox></CustomCheckBox>
    </StyledCheckBox>
  );
};

export default CheckBox;
