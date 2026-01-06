import React from "react";

const OrdersTable = () => {
    // Temporary static data (later this will come from API)
    const orders = [
        {
            id: 1,
            customer: "John Doe",
            phone: "670000001",
            address: "Bamenda",
            status: "Pending",
            amount: "5,000 FCFA",
        },
        {
            id: 2,
            customer: "Mary Smith",
            phone: "670000002",
            address: "Bambili",
            status: "Delivered",
            amount: "8,500 FCFA",
        },
    ];

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">All Orders</h2>

            <div className="overflow-x-auto bg-white rounded shadow">
                <table className="min-w-full border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">#</th>
                            <th className="p-3 text-left">Customer</th>
                            <th className="p-3 text-left">Phone</th>
                            <th className="p-3 text-left">Address</th>
                            <th className="p-3 text-left">Amount</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="border-t">
                                <td className="p-3">{order.id}</td>
                                <td className="p-3">{order.customer}</td>
                                <td className="p-3">{order.phone}</td>
                                <td className="p-3">{order.address}</td>
                                <td className="p-3 font-medium">{order.amount}</td>
                                <td className="p-3">
                                    <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700">
                                        {order.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <button className="text-blue-600 hover:underline">
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersTable;
