import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
    const [orders, setOrders] = useState([
        {
            id: "ORD001",
            vendorId: "V001",
            driverId: null,
            customerName: "Samuel",
            pickup: "Upstation",
            dropoff: "Hospital Roundabout",
            price: 500,
            status: "created"
        }
    ]);

    // Update order status
    const updateStatus = (id, status) => {
        setOrders(prev =>
            prev.map(order =>
                order.id === id ? { ...order, status } : order
            )
        );
    };

    // Assign driver
    const assignDriver = (id, driverId) => {
        setOrders(prev =>
            prev.map(order =>
                order.id === id
                    ? { ...order, driverId, status: "assigned" }
                    : order
            )
        );
    };

    return (
        <OrderContext.Provider value={{ orders, updateStatus, assignDriver }}>
            {children}
        </OrderContext.Provider>
    );
}

export const useOrders = () => useContext(OrderContext);
