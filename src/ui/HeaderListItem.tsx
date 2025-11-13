import styled, { css } from "styled-components";
import type { headerDataType } from "../types/types";
import { useLocation } from "react-router";
import { media } from "../styles/style";

const StyledList = styled.li`
  ${media.laptop(css`
    display: flex;
    align-items: center;
    gap: 1rem;
  `)}

  ${media.desktop(css`
    gap: 1.5rem;
  `)}
`;

const ListStep = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  border: 1px solid var(--col-gray-1);
  background-color: transparent;
  color: white;
  font-weight: 500;

  &.active {
    background-color: var(--col-skyblue);
    color: var(--col-darkblue);
    font-weight: 700;
    border-color: var(--col-skyblue);
  }

  ${media.desktop(css`
    height: 45px;
    width: 45px;
  `)}
`;

const ListDetails = styled.div`
  display: none;

  ${media.laptop(css`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    h4 {
      color: var(--col-lightblue);
    }

    p {
      color: white;
      font-weight: 700;
    }
  `)}

  ${media.desktop(css`
    gap: 0.5rem;

    h4 {
      font-size: 16px;
    }

    p {
      font-size: 18px;
    }
  `)}
`;
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
