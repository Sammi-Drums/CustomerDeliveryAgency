const mockOrders = [
    {
        id: "ORD-001",
        customer: "John Doe",
        pickup: "Upstation",
        dropoff: "Hospital Roundabout",
        status: "Pending",
    },
    {
        id: "ORD-002",
        customer: "Mary Smith",
        pickup: "Commercial Avenue",
        dropoff: "Food Market",
        status: "In Transit",
    },
];

export default function VendorOrdersTable() {
    return (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="w-full text-sm">
                <thead className="bg-gray-100 text-left">
                    <tr>
                        <th className="p-3">Order ID</th>
                        <th className="p-3">Customer</th>
                        <th className="p-3">Pickup</th>
                        <th className="p-3">Drop-off</th>
                        <th className="p-3">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {mockOrders.map((order) => (
                        <tr key={order.id} className="border-t">
                            <td className="p-3 font-medium">{order.id}</td>
                            <td className="p-3">{order.customer}</td>
                            <td className="p-3">{order.pickup}</td>
                            <td className="p-3">{order.dropoff}</td>
                            <td className="p-3">
                                <span
                                    className={`px-2 py-1 rounded text-xs ${order.status === "Pending"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "bg-blue-100 text-blue-800"
                                        }`}
                                >
                                    {order.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
