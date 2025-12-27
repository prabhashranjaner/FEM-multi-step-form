import { createContext, useContext } from "react";
import type { DataType } from "../types/types";

export const StateContext = createContext<DataType | null>(null);

export default function useState() {
  const context = useContext(StateContext);

  if (!context) throw new Error(" StateContext Called outside of Provider ");

  return context;
}
