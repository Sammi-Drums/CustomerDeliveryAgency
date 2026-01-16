export default function VendorOrdersTable() {
    const orders = [
        { id: 1, customer: "John", status: "Pending" },
        { id: 2, customer: "Mary", status: "Confirmed" },
    ];

    return (
        <div className="bg-white rounded-xl shadow overflow-x-auto">
            <table className="w-full text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 text-left">Order ID</th>
                        <th className="p-3 text-left">Customer</th>
                        <th className="p-3 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id} className="border-t">
                            <td className="p-3">#{order.id}</td>
                            <td className="p-3">{order.customer}</td>
                            <td className="p-3">{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
