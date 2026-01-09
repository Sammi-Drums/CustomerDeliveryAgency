
import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-100 pt-10 px-4">
                <Outlet />
            </main>
        </>
    );
}

