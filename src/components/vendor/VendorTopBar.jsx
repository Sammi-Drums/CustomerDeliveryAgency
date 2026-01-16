export default function VendorTopBar() {
    return (
        <header className="h-14 bg-white shadow flex items-center justify-between px-6">
            <div>
                <h2 className="font-semibold">Welcome, Vendor</h2>
                <p className="text-xs text-gray-500">Vendor Dashboard</p>
            </div>

            <button className="text-sm text-red-500 hover:underline">
                Logout
            </button>
        </header>
    );
}
