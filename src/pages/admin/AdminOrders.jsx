import OrdersTable from "../../components/admin/OrdersTable";

export default function AdminOrders() {
    return (
        <>
            <h1 className="text-2xl font-bold mb-6">All Orders</h1>
            <OrdersTable />
        </>
    );
}
