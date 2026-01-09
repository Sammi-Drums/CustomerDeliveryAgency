const mockDeliveries = [
    {
        id: "ORD-002",
        pickup: "Commercial Avenue",
        dropoff: "Food Market",
        status: "In Transit",
    },
    {
        id: "ORD-005",
        pickup: "Upstation",
        dropoff: "Hospital Roundabout",
        status: "Assigned",
    },
];

export default function DriverOrdersTable() {
    return (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="w-full text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 text-left">Order ID</th>
                        <th className="p-3 text-left">Pickup</th>
                        <th className="p-3 text-left">Drop-off</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {mockDeliveries.map((order) => (
                        <tr key={order.id} className="border-t">
                            <td className="p-3 font-medium">{order.id}</td>
                            <td className="p-3">{order.pickup}</td>
                            <td className="p-3">{order.dropoff}</td>
                            <td className="p-3">
                                <span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-800">
                                    {order.status}
                                </span>
                            </td>
                            <td className="p-3">
                                <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                                    Mark Delivered
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}
