import useState from "../../contexts/StateContext";
import useDispatch from "../../contexts/DispatchContext";
import {
  CustomCheckBox,
  HiddenInput,
  StyledToggleSwitch,
} from "./ToggleSwitch.style";

const ToggleSwitch = () => {
  const state = useState();
  const dispatch = useDispatch();

  const handleToggle = () => {
    const payload = state.paymentMode === "monthly" ? "yearly" : "monthly";
    dispatch({
      type: "payment-mode/update",
      payload,
    });
  };
  return (
    <StyledToggleSwitch
      className={`${state.paymentMode === "monthly" ? "monthly" : "yearly"}`}
    >
      <HiddenInput
        type="checkbox"
        className=""
        checked={state.paymentMode === "yearly"}
        onChange={handleToggle}
      />
      <CustomCheckBox></CustomCheckBox>
    </StyledToggleSwitch>
  );
};

export default ToggleSwitch;
