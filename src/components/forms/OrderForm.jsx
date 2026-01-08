export default function OrderForm() {
    return (
        <form className="bg-white p-6 rounded-lg shadow max-w-xl">

            <h2 className="text-xl font-semibold mb-6">Delivery Details</h2>

            {/* Customer Name */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                    Customer Name
                </label>
                <input
                    type="text"
                    placeholder="Enter customer name"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                    Phone Number
                </label>
                <input
                    type="text"
                    placeholder="e.g. 6XXXXXXXX"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                />
            </div>

            {/* Pickup Location */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                    Pickup Location
                </label>
                <input
                    type="text"
                    placeholder="e.g. Upstation"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                />
            </div>

            {/* Drop-off Location */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                    Drop-off Location
                </label>
                <input
                    type="text"
                    placeholder="e.g. Hospital Roundabout"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                />
            </div>

            {/* Description */}
            <div className="mb-6">
                <label className="block text-sm font-medium mb-1">
                    Item Description
                </label>
                <textarea
                    placeholder="e.g. 2 bottles of peanuts"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
                Submit Order
            </button>

        </form>
    );
}
