import styled from "styled-components";
import useState from "../contexts/StateContext";
import useDispatch from "../contexts/DispatchContext";

const StyledToggleSwitch = styled.label`
  width: 50px;
  height: 25px;
  position: relative;
`;

const CustomCheckBox = styled.div`
  position: absolute;
  top: 0;
  background-color: var(--col-darkblue);
  width: 100%;
  height: 100%;
  border-radius: 50px;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    top: 2px;
    left: 3px;
    transition: transform 0.3s;
  }
`;

const HiddenInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${CustomCheckBox}::after {
    left: auto;
    right: 3px;
  }
`;

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
