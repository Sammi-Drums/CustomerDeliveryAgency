import VendorOrdersTable from "../../components/vendor/VendorOrdersTable";

export default function VendorOrders() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">My Orders</h1>
            <VendorOrdersTable />
        </div>
    );
}
