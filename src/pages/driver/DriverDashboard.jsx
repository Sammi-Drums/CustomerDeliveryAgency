import DeliveryCard from "../../components/driver/DeliveryCard";

export default function DriverDashboard() {
    return (
        <div className="space-y-6">

            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">
                    Driver Dashboard
                </h1>
                <p className="text-gray-500 text-sm">
                    Available and assigned deliveries
                </p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded shadow p-4">
                    <p className="text-sm text-gray-500">Available Jobs</p>
                    <h2 className="text-2xl font-bold">3</h2>
                </div>

                <div className="bg-white rounded shadow p-4">
                    <p className="text-sm text-gray-500">In Progress</p>
                    <h2 className="text-2xl font-bold">1</h2>
                </div>

                <div className="bg-white rounded shadow p-4">
                    <p className="text-sm text-gray-500">Completed</p>
                    <h2 className="text-2xl font-bold">12</h2>
                </div>
            </div>

            {/* Deliveries List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <DeliveryCard
                    orderId="ORD-1023"
                    pickup="Hospital Roundabout"
                    dropoff="Up Station"
                    status="available"
                />

                <DeliveryCard
                    orderId="ORD-1024"
                    pickup="Food Market"
                    dropoff="Commercial Avenue"
                    status="in-progress"
                />

            </div>

        </div>
    );
}
