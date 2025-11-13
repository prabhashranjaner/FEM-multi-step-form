import styled, { css } from "styled-components";
import HeaderListItem from "./HeaderListItem";
import type { headerDataType } from "../types/types";
import { media } from "../styles/style";

const headerData: headerDataType[] = [
  { stepNo: "1", title: "Your Info", url: "/" },
  { stepNo: "2", title: "Select plan", url: "/select-plan" },
  { stepNo: "3", title: "add-ons", url: "/addons" },
  { stepNo: "4", title: "summary", url: "/summary" },
];

const StyledHeader = styled.header`
  background-image: url(/images/bg-sidebar-mobile.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 25%;
  display: grid;
  justify-items: center;

  ${media.laptop(css`
    border-radius: 12px;
    background-image: url(/images/bg-sidebar-desktop.svg);
    background-size: cover;
    padding: 1rem;
    justify-items: left;
  `)}

  ${media.desktop(css`
    padding: 1.5rem;
  `)}
`;

const HeaderList = styled.ul`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  list-style: none;

  ${media.laptop(css`
    flex-direction: column;
    gap: 2rem;
  `)}
`;
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
