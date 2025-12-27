import Header from "../Header/Header";
import { Outlet } from "react-router";
import { Main, StyledAppLayout } from "./AppLayout.style";

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
