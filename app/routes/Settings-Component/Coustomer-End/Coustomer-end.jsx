// OrderStatusComponent.jsx
import { useState } from "react";
import { Form } from "@remix-run/react";

export function OrderStatusComponent({ orderData }) {
  const [formState, setFormState] = useState(orderData || {});

  return (
    <Form method="post">
      {[
        "placed",
        "confirmed",
        "completed",
        "cancelled",
        "returned",
      ].map((status) => (
        <div key={status}>
          <label>
            <input
              type="checkbox"
              checked={formState[status] || false}
              onChange={(e) =>
                setFormState({ ...formState, [status]: e.target.checked })
              }
            />
            Order {status.charAt(0).toUpperCase() + status.slice(1)}
          </label>
          <input
            type="text"
            value={formState[`${status}Details`] || ""}
            onChange={(e) =>
              setFormState({ ...formState, [`${status}Details`]: e.target.value })
            }
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </Form>
  );
}

// AdminOrderComponent.jsx
export function AdminOrderComponent() {
  const [formState, setFormState] = useState({ adminNumbers: "", newOrder: false });

  return (
    <Form method="post">
      <label>
        <input
          type="checkbox"
          checked={formState.newOrder}
          onChange={(e) => setFormState({ ...formState, newOrder: e.target.checked })}
        />
        New Order
      </label>
      <input
        type="text"
        placeholder="Admin Numbers (comma separated)"
        value={formState.adminNumbers}
        onChange={(e) => setFormState({ ...formState, adminNumbers: e.target.value })}
      />
      <button type="submit">Submit</button>
    </Form>
  );
}
