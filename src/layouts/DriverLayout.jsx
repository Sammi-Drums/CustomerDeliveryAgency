const DriverLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow p-4 font-semibold">
                Driver Dashboard
            </header>
            <main className="p-4">{children}</main>
        </div>
    );
};

export default DriverLayout;
