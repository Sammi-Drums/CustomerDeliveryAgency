import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white p-5">
                <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

                <nav className="space-y-4 text-sm">
                    <Link to="/admin/orders" className="block hover:text-blue-400">
                        Orders
                    </Link>

                    <Link to="/admin/drivers" className="block hover:text-blue-400">
                        Drivers
                    </Link>

                    <Link to="/admin/users" className="block hover:text-blue-400">
                        Users
                    </Link>

                    <Link to="/admin/analytics" className="block hover:text-blue-400">
                        Analytics
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
