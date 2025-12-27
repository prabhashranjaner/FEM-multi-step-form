export type headerDataType = Readonly<{
  stepNo: string;
  title: string;
  url: string;
}>;

export type PriceType = {
  monthly: number;
  yearly: number;
};

export type PlanDataType = Readonly<{
  id: number;
  icon: string;
  name: string;
  price: PriceType;
}>;

export type AddonsType = Readonly<{
  id: number;
  name: string;
  price: PriceType;
  detail: string;
}>;

export type UserType = Readonly<{
  name: string;
  email: string;
  phone: number;
}>;

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
