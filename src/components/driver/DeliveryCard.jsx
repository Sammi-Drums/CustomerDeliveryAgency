export default function DeliveryCard({
    orderId,
    pickup,
    dropoff,
    status
}) {

    const statusStyles = {
        available: "bg-green-100 text-green-700",
        "in-progress": "bg-yellow-100 text-yellow-700",
        completed: "bg-gray-200 text-gray-600"
    };

    return (
        <div className="bg-white rounded-lg shadow hover:shadow-md transition p-5 space-y-4">

            {/* Header */}
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">
                    {orderId}
                </h3>

                <span
                    className={`text-xs px-3 py-1 rounded-full ${statusStyles[status]}`}
                >
                    {status.replace("-", " ")}
                </span>
            </div>

            {/* Locations */}
            <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Pickup:</strong> {pickup}</p>
                <p><strong>Dropoff:</strong> {dropoff}</p>
            </div>

            {/* Actions (UI ONLY) */}
            <div className="flex gap-3 pt-2">

                {status === "available" && (
                    <button
                        className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        onClick={() => console.log("Accept delivery – backend later")}
                    >
                        Accept
                    </button>
                )}

                {status === "in-progress" && (
                    <button
                        className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                        onClick={() => console.log("Mark delivered – backend later")}
                    >
                        Mark Delivered
                    </button>
                )}

            </div>
        </div>
    );
}
