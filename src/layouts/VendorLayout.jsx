import { Link, Outlet } from "react-router-dom";

export default function VendorLayout() {
    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* Sidebar */}
            <aside className="w-64 bg-blue-900 text-white p-5">
                <h2 className="text-xl font-bold mb-8">Vendor Panel</h2>

                <nav className="space-y-4 text-sm">
                    <Link to="/vendor/dashboard" className="block hover:text-blue-300">
                        Dashboard
                    </Link>

                    <Link to="/vendor/create-order" className="block hover:text-blue-300">
                        Create Order
                    </Link>

                    <Link to="/vendor/orders" className="block hover:text-blue-300">
                        My Orders
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
