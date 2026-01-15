import { useOrders } from "../../context/OrderContext";
import { useAuth } from "../../context/AuthContext";

export default function DriverDashboard() {
    const { orders, updateStatus } = useOrders();
    const { user } = useAuth();

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">My Deliveries</h2>

            {orders
                .filter(o => o.driverId === user.id)
                .map(order => (
                    <div key={order.id} className="bg-white p-4 mb-3 rounded shadow">
                        <p>{order.pickup} → {order.dropoff}</p>
                        <p>Status: {order.status}</p>

                        {order.status === "assigned" && (
                            <button
                                onClick={() => updateStatus(order.id, "picked")}
                                className="bg-yellow-500 text-white px-3 py-1 rounded"
                            >
                                Picked Up
                            </button>
                        )}

                        {order.status === "picked" && (
                            <button
                                onClick={() => updateStatus(order.id, "delivered")}
                                className="bg-green-600 text-white px-3 py-1 rounded"
                            >
                                Delivered
                            </button>
                        )}
                    </div>
                ))}
        </div>
    );
}
