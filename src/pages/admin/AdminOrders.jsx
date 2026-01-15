import { useOrders } from "../../context/OrderContext";

export default function AdminOrders() {
    const { orders, assignDriver } = useOrders();

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Admin Orders</h2>

            {orders
                .filter(o => o.status === "confirmed")
                .map(order => (
                    <div key={order.id} className="bg-white p-4 mb-3 rounded shadow">
                        <p>{order.pickup} → {order.dropoff}</p>

                        <button
                            onClick={() => assignDriver(order.id, "D001")}
                            className="bg-blue-600 text-white px-3 py-1 rounded"
                        >
                            Assign Driver
                        </button>
                    </div>
                ))}
        </div>
    );
}
