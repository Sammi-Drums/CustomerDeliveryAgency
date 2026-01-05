const DriverOrderActions = ({ status, onAction }) => {
    switch (status) {
        case "PENDING":
            return (
                <button
                    onClick={() => onAction("ACCEPTED")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                    Accept Order
                </button>
            );

        case "ACCEPTED":
            return (
                <button
                    onClick={() => onAction("IN_TRANSIT")}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg"
                >
                    Start Delivery
                </button>
            );

        case "IN_TRANSIT":
            return (
                <button
                    onClick={() => onAction("DELIVERED")}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                    Mark as Delivered
                </button>
            );

        default:
            return null;
    }
};

export default DriverOrderActions;
