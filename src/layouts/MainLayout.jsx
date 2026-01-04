import Navbar from "../components/navigation/Navbar";

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="max-w-6xl mx-auto p-4">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
