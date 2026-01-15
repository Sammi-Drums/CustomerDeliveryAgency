

// import { Routes, Route } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
// import AdminLayout from "./layouts/AdminLayout";
// import AdminOrderDetails from "./pages/admin/AdminOrderDetails";

// import Home from "./pages/Home";
// import CreateOrder from "./pages/CreateOrder";
// import Orders from "./pages/Orders";
// import AdminOrders from "./pages/admin/AdminOrders";

// function App() {
//   return (
//     <Routes>

//       {/* Public */}
//       <Route element={<MainLayout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/create-order" element={<CreateOrder />} />
//         <Route path="/orders" element={<Orders />} />
//       </Route>

//       {/* Admin */}
//       <Route path="/admin" element={<AdminLayout />}>
//         <Route path="orders" element={<AdminOrders />} />
//       </Route>
//       <Route path="/admin" element={<AdminLayout />}>
//         <Route path="orders" element={<AdminOrders />} />
//         <Route path="orders/:id" element={<AdminOrderDetails />} />
//       </Route>
//       <Route path="/admin/orders" element={<AdminOrders />} />
//       <Route path="/admin/orders/:id" element={<AdminOrderDetails />} />


//     </Routes>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import CreateOrder from "./pages/CreateOrder";
import Orders from "./pages/Orders";

import VendorLayout from "./layouts/VendorLayout";
import VendorDashboard from "./pages/vendor/VendorDashboard";
import VendorCreateOrder from "./pages/vendor/VendorCreateOrder";
import VendorOrders from "./pages/vendor/VendorOrders";

import DriverLayout from "./layouts/DriverLayout";
import DriverOrders from "./pages/driver/DriverOrders";
import DriverHistory from "./pages/driver/DriverHistory";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProtectedRoute from "./routes/ProtectedRoute";

import AdminOrders from "./pages/admin/AdminOrders";
import AdminDrivers from "./pages/admin/AdminDrivers";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminAnalytics from "./pages/admin/AdminAnalytics";

function App() {
  return (
    <Routes>

      {/* MAIN USER ROUTES */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/create-order" element={<CreateOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* ADMIN ROUTES */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="orders" element={<AdminOrders />} />
        <Route path="drivers" element={<AdminDrivers />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="analytics" element={<AdminAnalytics />} />
      </Route>
      {/* VENDOR ROUTES */}
      <Route
        path="/vendor"
        element={
          <ProtectedRoute allowedRoles={["vendor"]}>
            <VendorLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<VendorDashboard />} />
        <Route path="create-order" element={<VendorCreateOrder />} />
        <Route path="orders" element={<VendorOrders />} />
      </Route>
      {/* DRIVER ROUTES */}
      <Route
        path="/driver"
        element={
          <ProtectedRoute allowedRoles={["driver"]}>
            <DriverLayout />
          </ProtectedRoute>
        }
      >
        <Route path="orders" element={<DriverOrders />} />
        <Route path="history" element={<DriverHistory />} />
      </Route>


    </Routes>
  );
}

export default App;
