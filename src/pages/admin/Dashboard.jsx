import OrderCard from "../../components/cards/OrderCard";

const AdminDashboard = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">All Orders</h2>

            <div className="grid md:grid-cols-2 gap-4">
                <OrderCard
                    customerName="Vendor 1"
                    pickup="Up Station"
                    destination="Hospital Roundabout"
                    price="2000"
                    status="picked"
                />

                <OrderCard
                    customerName="Vendor 2"
                    pickup="Nkwen"
                    destination="Food Market"
                    price="3000"
                    status="pending"
                />
            </div>
        </div>
    );
};

export default AdminDashboard;
