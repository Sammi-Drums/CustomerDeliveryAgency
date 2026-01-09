import DriverOrdersTable from "../../components/driver/DriverOrdersTable";

export default function DriverOrders() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Assigned Deliveries</h1>
            <DriverOrdersTable />
        </div>
    );
}
