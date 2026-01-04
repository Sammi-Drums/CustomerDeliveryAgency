import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import DriverLayout from "./layouts/DriverLayout";
import OrderDetails from "./pages/OrderDetails";

import Home from "./pages/Home";
import CreateOrder from "./pages/CreateOrder";
import Orders from "./pages/Orders";
import AdminDashboard from "./pages/admin/Dashboard";
import DriverDashboard from "./pages/driver/Dashboard";

function App() {
  return (
    <Routes>
      {/* Public / Customer */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/orders/:id"
        element={
          <MainLayout>
            <OrderDetails />
          </MainLayout>
        }
      />

      <Route
        path="/create-order"
        element={
          <MainLayout>
            <CreateOrder />
          </MainLayout>
        }
      />
      <Route
        path="/orders"
        element={
          <MainLayout>
            <Orders />
          </MainLayout>
        }
      />

      {/* Admin */}
      <Route
        path="/admin"
        element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        }
      />

      {/* Driver */}
      <Route
        path="/driver"
        element={
          <DriverLayout>
            <DriverDashboard />
          </DriverLayout>
        }
      />
    </Routes>
  );
}

export default App;
