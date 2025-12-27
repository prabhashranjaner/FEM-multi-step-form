import { useReducer, type ReactNode } from "react";
import type { DataType } from "../types/types";
import reducer from "./reducer";
import { StateContext } from "./StateContext";
import { DispatchContext } from "./DispatchContext";

const initialState: DataType = {
  user: null,
  plan: null,
  addons: [],
  paymentMode: "monthly",
};

export default function DataContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
