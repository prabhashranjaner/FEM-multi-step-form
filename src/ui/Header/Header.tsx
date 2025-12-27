import HeaderListItem from "../HeaderListItem/HeaderListItem";
import type { headerDataType } from "../../types/types";
import { HeaderList, StyledHeader } from "./Header.style";

const headerData: headerDataType[] = [
  { stepNo: "1", title: "Your Info", url: "/" },
  { stepNo: "2", title: "Select plan", url: "/select-plan" },
  { stepNo: "3", title: "add-ons", url: "/addons" },
  { stepNo: "4", title: "summary", url: "/summary" },
];

const Header = () => {
  return (
    <StyledHeader>
      <HeaderList>
        {headerData.map((item) => (
          <HeaderListItem key={item.stepNo} item={item} />
        ))}
      </HeaderList>
    </StyledHeader>
  );
};

export default Header;
