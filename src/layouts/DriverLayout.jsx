import { Link, Outlet } from "react-router-dom";

export default function DriverLayout() {
    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* Sidebar */}
            <aside className="w-64 bg-green-900 text-white p-5">
                <h2 className="text-xl font-bold mb-8">Driver Panel</h2>

                <nav className="space-y-4 text-sm">
                    <Link to="/driver/orders" className="block hover:text-green-300">
                        My Deliveries
                    </Link>

                    <Link to="/driver/history" className="block hover:text-green-300">
                        Delivery History
                    </Link>
                </nav>
            </aside>

            {/* Content */}
            <main className="flex-1 p-6">
                <Outlet />
            </main>

        </div>
    );
}
