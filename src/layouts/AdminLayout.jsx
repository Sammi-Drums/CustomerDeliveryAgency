import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import {
    FaBox,
    FaUsers,
    FaTruck,
    FaChartBar,
    FaBars
} from "react-icons/fa";

export default function AdminLayout() {
    const [collapsed, setCollapsed] = useState(false);

    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded
     transition
     ${isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"}`;

    return (
        <div className="min-h-screen flex">

            {/* Sidebar */}
            <aside
                className={`bg-gray-900 text-white
        ${collapsed ? "w-20" : "w-64"}
        transition-all duration-300`}
            >

                {/* Header */}
                <div className="flex items-center justify-between p-4">
                    {!collapsed && <h2 className="font-bold text-lg">Admin Panel</h2>}
                    <button onClick={() => setCollapsed(!collapsed)}>
                        <FaBars />
                    </button>
                </div>

                {/* Nav */}
                <nav className="space-y-2 mt-4">
                    <NavLink to="/admin/orders" className={linkClass}>
                        <FaBox />
                        {!collapsed && "Orders"}
                    </NavLink>

                    <NavLink to="/admin/drivers" className={linkClass}>
                        <FaTruck />
                        {!collapsed && "Drivers"}
                    </NavLink>

                    <NavLink to="/admin/users" className={linkClass}>
                        <FaUsers />
                        {!collapsed && "Users"}
                    </NavLink>

                    <NavLink to="/admin/analytics" className={linkClass}>
                        <FaChartBar />
                        {!collapsed && "Analytics"}
                    </NavLink>
                </nav>
            </aside>

            {/* Content */}
            <main className="flex-1 bg-gray-100 p-6">
                <Outlet />
            </main>
        </div>
    );
}
