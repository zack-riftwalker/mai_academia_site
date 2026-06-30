export type OrderPlan = "1-year" | "18-month";
export type OrderStatus = "pending" | "paid" | "delivered" | "cancelled";

export type Order = {
  id: string;
  order_number: string;
  customer_name: string;
  contact: string;
  plan: OrderPlan;
  status: OrderStatus;
  created_at: string;
  updated_at: string;
};
