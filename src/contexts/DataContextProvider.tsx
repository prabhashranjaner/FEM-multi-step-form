import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { ContextType, DataType } from "../types/types";
import reducer from "./reducer";

const DataContext = createContext<ContextType | null>(null);

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
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

// eslint-disable-next-line
export function useData() {
  const context = useContext(DataContext);

  if (!context) throw new Error("Called outside of Context ");

  return context;
}
