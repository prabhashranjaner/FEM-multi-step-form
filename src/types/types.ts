export type headerDataType = {
  stepNo: string;
  title: string;
  url: string;
};

export type PlanDataType = {
  icon: string;
  name: string;
  monthly: string;
  yearly: string;
  id: number;
};

export type AddonsType = {
  name: string;
  monthly: string;
  yearly: string;
  id: number;
  detail: string;
};

export type UserType = {
  name: string;
  email: string;
  phone: number;
};

export type PaymentModeType = "monthly" | "yearly";

export type DataType = {
  user: UserType | null;
  plan: PlanDataType | null;
  addons: AddonsType[];
  paymentMode: PaymentModeType;
};

export type ActionTypes =
  | {
      type: "user/add";
      payload: UserType;
    }
  | { type: "plan/add"; payload: PlanDataType }
  | { type: "addons/add"; payload: AddonsType }
  | { type: "addons/remove"; payload: number }
  | { type: "payment-mode/update"; payload: PaymentModeType };
