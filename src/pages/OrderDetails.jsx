import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const { id } = useParams();

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-xl font-bold">Order Details</h2>

      <div className="space-y-2 text-sm text-gray-700">
        <p>
          <strong>Order ID:</strong> {id}
        </p>
        <p>
          <strong>Customer:</strong> John Doe
        </p>
        <p>
          <strong>Pickup:</strong> Up Station
        </p>
        <p>
          <strong>Destination:</strong> Hospital Roundabout
        </p>
        <p>
          <strong>Price:</strong> 2000 FCFA
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span className="text-yellow-600 font-semibold">PENDING</span>
        </p>
      </div>

      {/* Placeholder for map */}
      <div className="h-40 bg-gray-100 rounded flex items-center justify-center text-gray-500">
        Map will appear here
      </div>

      {/* Action buttons (UI only) */}
      <div className="flex gap-4">
        <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg">
          Accept Order
        </button>
        <button className="flex-1 bg-gray-200 py-2 rounded-lg">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
