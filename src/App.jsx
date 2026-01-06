// import { Routes, Route } from "react-router-dom";

// import MainLayout from "./layouts/MainLayout";
// import AdminLayout from "./layouts/AdminLayout";
// import DriverLayout from "./layouts/DriverLayout";
// import OrderDetails from "./pages/OrderDetails";
// import DriverOrder from "./pages/DriverOrder";

// import Home from "./pages/Home";
// import CreateOrder from "./pages/CreateOrder";
// import Orders from "./pages/Orders";
// import AdminDashboard from "./pages/admin/Dashboard";
// import DriverDashboard from "./pages/driver/Dashboard";

// function App() {
//   return (
//     <Routes>
//       {/* Public / Customer */}
//       <Route
//         path="/"
//         element={
//           <MainLayout>
//             <Home />
//           </MainLayout>
//         }
//       />
//       <Route
//         path="/orders/:id"
//         element={
//           <MainLayout>
//             <OrderDetails />
//           </MainLayout>
//         }
//       />

//       <Route
//         path="/create-order"
//         element={
//           <MainLayout>
//             <CreateOrder />
//           </MainLayout>
//         }
//       />
//       <Route
//         path="/orders"
//         element={
//           <MainLayout>
//             <Orders />
//           </MainLayout>
//         }
//       />

//       {/* Admin */}
//       <Route
//         path="/admin"
//         element={
//           <AdminLayout>
//             <AdminDashboard />
//           </AdminLayout>
//         }
//       />

//       {/* Driver */}
//       <Route
//         path="/driver"
//         element={
//           <DriverLayout>
//             <DriverDashboard />
//           </DriverLayout>
//         }
//       />
//       <Route path="/driver/order"
//         element={
//           <DriverOrder />} />
//     </Routes>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import AdminOrderDetails from "./pages/admin/AdminOrderDetails";

import Home from "./pages/Home";
import CreateOrder from "./pages/CreateOrder";
import Orders from "./pages/Orders";
import AdminOrders from "./pages/admin/AdminOrders";

function App() {
  return (
    <Routes>

      {/* Public */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/create-order" element={<CreateOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Route>

      {/* Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="orders" element={<AdminOrders />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="orders" element={<AdminOrders />} />
        <Route path="orders/:id" element={<AdminOrderDetails />} />
      </Route>
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/admin/orders/:id" element={<AdminOrderDetails />} />


    </Routes>
  );
}

export default App;
