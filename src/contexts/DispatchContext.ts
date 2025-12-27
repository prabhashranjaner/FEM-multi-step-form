import { createContext, useContext, type Dispatch } from "react";
import type { ActionTypes } from "../types/types";

export const DispatchContext = createContext<Dispatch<ActionTypes> | null>(
  null
);

export default function useDispatch() {
  const context = useContext(DispatchContext);

  if (!context) throw new Error(" DispatchContext Called outside of Provider ");

  return context;
}
