import styled, { css } from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router";
import { media } from "../styles/style";

const StyledAppLayout = styled.div`
  position: relative;
  height: 100dvh;

  ${media.laptop(css`
    max-width: 90vw;
    margin: 0 auto;
    height: 550px;
    background-color: white;
    padding: 1rem;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 200px 1fr;
    width: 950px;
  `)}

  ${media.desktop(css`
    height: 600px;
    max-width: 1080px;
    border-radius: 12px;
    grid-template-columns: 280px 1fr;
    padding: 0;
  `)}
`;

const Main = styled.main`
  position: relative;

  ${media.laptop(css`
    display: flex;
    justify-content: center;
    padding: 1rem;
  `)}
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
