import { getAllOrders, planLabel } from "@/lib/supabase/orders-data";
import { updateOrderStatusAction } from "@/lib/orders";
import { logout } from "@/lib/auth";
import type { OrderStatus } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";

const STATUS_LABELS: Record<OrderStatus, string> = {
  pending: "در انتظار پرداخت",
  paid: "پرداخت‌شده",
  delivered: "تحویل‌شده",
  cancelled: "لغوشده",
};

export default async function AdminPage() {
  const orders = await getAllOrders();

  return (
    <main className="min-h-screen px-4 py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-glow text-main text-3xl font-bold">سفارش‌ها</h1>
          <form action={logout}>
            <button
              type="submit"
              className="glass-panel text-main rounded-lg px-4 py-2 text-sm transition-all hover:text-[var(--color-secondary-neon)]"
            >
              خروج
            </button>
          </form>
        </div>

        {orders.length === 0 ? (
          <p className="text-muted">هنوز سفارشی ثبت نشده است.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="glass-panel flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex flex-col gap-1">
                  <div className="text-main font-bold">
                    {order.order_number}
                  </div>
                  <div className="text-muted text-sm">
                    {order.customer_name} — {order.contact}
                  </div>
                  <div className="text-muted text-sm">
                    {planLabel(order.plan)} ·{" "}
                    {new Date(order.created_at).toLocaleString("fa-IR")}
                  </div>
                </div>

                <form
                  action={updateOrderStatusAction}
                  className="flex items-center gap-3"
                >
                  <input type="hidden" name="orderId" value={order.id} />
                  <select
                    name="status"
                    defaultValue={order.status}
                    className="text-main rounded-lg border border-[var(--color-primary-neon)]/30 bg-transparent px-3 py-2 text-sm outline-none"
                  >
                    {Object.entries(STATUS_LABELS).map(([value, label]) => (
                      <option
                        key={value}
                        value={value}
                        className="bg-[var(--color-surface)]"
                      >
                        {label}
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="rounded-lg border border-[var(--color-primary-neon)] px-4 py-2 text-sm font-bold text-[var(--color-primary-neon)] transition-colors hover:bg-[var(--color-primary-neon)] hover:text-[#070B1A]"
                  >
                    به‌روزرسانی
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
