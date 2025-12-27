import type { headerDataType } from "../../types/types";
import { useLocation } from "react-router";
import { ListDetails, ListStep, StyledList } from "./HeaderListItem.style";

const HeaderListItem = ({ item }: PropsType) => {
  const location = useLocation();
  const isActive = item.url === location.pathname;

  return (
    <StyledList>
      <ListStep className={isActive ? "active" : ""}>{item.stepNo}</ListStep>
      <ListDetails>
        <h4>STEP {item.stepNo}</h4>
        <p>{item.title.toUpperCase()}</p>
      </ListDetails>
    </StyledList>
  );
};

export default HeaderListItem;

type PropsType = {
  item: headerDataType;
};
