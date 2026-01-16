export default function VendorStats() {
    const stats = [
        { label: "Total Orders", value: 32 },
        { label: "Pending Orders", value: 8 },
        { label: "Active Deliveries", value: 3 },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-white p-5 rounded-xl shadow"
                >
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                </div>
            ))}
        </div>
    );
}
