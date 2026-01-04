import { Link } from "react-router-dom";

const statusStyles = {
    pending: "bg-yellow-100 text-yellow-700",
    picked: "bg-blue-100 text-blue-700",
    delivered: "bg-green-100 text-green-700",
};

const OrderCard = ({
    customerName = "Customer Name",
    pickup = "Pickup location",
    destination = "Delivery location",
    price = "0",
    status = "pending",
}) => {
    return (
        <div className="bg-white rounded-xl shadow p-4 space-y-3">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold">{customerName}</h3>
                <span
                    className={`text-xs px-2 py-1 rounded-full ${statusStyles[status]
                        }`}
                >
                    {status.toUpperCase()}
                </span>
            </div>

            <div className="text-sm text-gray-600">
                <p>
                    <strong>From:</strong> {pickup}
                </p>
                <p>
                    <strong>To:</strong> {destination}
                </p>
            </div>

            <div className="flex justify-between items-center">
                <span className="font-semibold text-blue-600">
                    {price} FCFA
                </span>

                <Link
                    to={`/orders/1`}
                    className="text-sm text-blue-600 hover:underline"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default OrderCard;
