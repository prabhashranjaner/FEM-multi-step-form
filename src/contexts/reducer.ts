import type { ActionTypes, DataType } from "../types/types";

export default function reducer(state: DataType, action: ActionTypes) {
  switch (action.type) {
    case "user/add":
      return { ...state, user: action.payload };
    case "plan/add":
      return { ...state, plan: action.payload };
    case "addons/add": {
      if (state.addons.length > 0)
        return { ...state, addons: [...state.addons, action.payload] };
      else return { ...state, addons: [action.payload] };
    }
    case "addons/remove":
      return {
        ...state,
        addons: state.addons?.filter((addon) => addon.id !== action.payload),
      };
    case "payment-mode/update":
      return { ...state, paymentMode: action.payload };

    default:
      return state;
  }
}
