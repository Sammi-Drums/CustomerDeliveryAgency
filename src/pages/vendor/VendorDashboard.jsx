export default function VendorDashboard() {
    const cards = [
        { title: "Total Orders", value: 42 },
        { title: "Pending Orders", value: 9 },
        { title: "Active Deliveries", value: 4 },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cards.map((card, i) => (
                    <div
                        key={i}
                        className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                    >
                        <p className="text-gray-500 text-sm">{card.title}</p>
                        <p className="text-3xl font-bold">{card.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
