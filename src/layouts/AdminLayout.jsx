const AdminLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            <aside className="w-64 bg-gray-900 text-white p-4">
                <h2 className="font-bold text-lg mb-6">Admin Panel</h2>
                <ul className="space-y-3 text-sm">
                    <li>Dashboard</li>
                    <li>Users</li>
                    <li>Orders</li>
                </ul>
            </aside>

            <main className="flex-1 p-6">{children}</main>
        </div>
    );
};

export default AdminLayout;
