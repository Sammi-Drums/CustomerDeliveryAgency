import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
    return (
        <div className="min-h-screen bg-gray-100 flex">

            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white p-5">
                <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

                <nav className="space-y-3">
                    <Link
                        to="/admin/orders"
                        className="block hover:text-gray-300"
                    >
                        Orders
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <Outlet />
            </main>

        </div>
    );
}
