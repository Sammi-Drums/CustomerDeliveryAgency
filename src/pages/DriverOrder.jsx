import { useState } from "react";
import StatusBadge from "../components/StatusBadge";
import DriverOrderActions from "../components/DriverOrderActions";

const DriverOrder = () => {
    const [status, setStatus] = useState("PENDING");

    const handleAction = (newStatus) => {
        setStatus(newStatus);
    };

    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Driver Order View</h2>

            <p className="mb-2">
                <strong>Pickup:</strong> Mile 4 Junction
            </p>

            <p className="mb-2">
                <strong>Dropoff:</strong> Food Market
            </p>

            <div className="mb-4">
                <StatusBadge status={status} />
            </div>

            <DriverOrderActions status={status} onAction={handleAction} />
        </div>
    );
};

export default DriverOrder;
