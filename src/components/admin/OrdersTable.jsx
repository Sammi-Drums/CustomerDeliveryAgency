import mockOrders from "../../data/mockOrders";

export default function OrdersTable() {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-200 text-gray-700">
                    <tr>
                        <th className="p-3">Order ID</th>
                        <th className="p-3">Customer</th>
                        <th className="p-3">Driver</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {mockOrders.map(order => (
                        <tr key={order.id} className="border-t hover:bg-gray-50">
                            <td className="p-3">{order.id}</td>
                            <td className="p-3">{order.customer}</td>
                            <td className="p-3">{order.driver}</td>
                            <td className="p-3">
                                <span className={`px-2 py-1 rounded text-white text-xs
                  ${order.status === "Pending" && "bg-yellow-500"}
                  ${order.status === "In Transit" && "bg-blue-500"}
                  ${order.status === "Delivered" && "bg-green-600"}
                `}>
                                    {order.status}
                                </span>
                            </td>
                            <td className="p-3 font-semibold">{order.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
