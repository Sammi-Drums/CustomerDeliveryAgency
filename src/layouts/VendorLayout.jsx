import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import {
    FiMenu,
    FiHome,
    FiPackage,
    FiShoppingCart
} from "react-icons/fi";

export default function VendorLayout() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* Sidebar */}
            <aside
                className={`bg-indigo-900 text-white transition-all duration-300
        ${collapsed ? "w-20" : "w-64"} p-4`}
            >
                {/* Toggle */}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="mb-6 text-xl"
                >
                    <FiMenu />
                </button>

                <nav className="space-y-4 text-sm">
                    <NavLink
                        to="/vendor"
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-2 rounded 
              ${isActive ? "bg-indigo-700" : "hover:bg-indigo-800"}`
                        }
                    >
                        <FiHome />
                        {!collapsed && "Dashboard"}
                    </NavLink>

                    <NavLink
                        to="/vendor/orders"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-2 rounded 
              ${isActive ? "bg-indigo-700" : "hover:bg-indigo-800"}`
                        }
                    >
                        <FiShoppingCart />
                        {!collapsed && "Orders"}
                    </NavLink>

                    <NavLink
                        to="/vendor/products"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-2 rounded 
              ${isActive ? "bg-indigo-700" : "hover:bg-indigo-800"}`
                        }
                    >
                        <FiPackage />
                        {!collapsed && "Products"}
                    </NavLink>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <VendorTopBar />
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
