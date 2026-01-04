import OrderCard from "../components/cards/OrderCard";

const Orders = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">My Orders</h2>

      <div className="space-y-4">
        <OrderCard
          customerName="John Doe"
          pickup="Up Station"
          destination="Hospital Roundabout"
          price="2000"
          status="pending"
        />

        <OrderCard
          customerName="Mary Ann"
          pickup="Food Market"
          destination="Commercial Avenue"
          price="1500"
          status="picked"
        />

        <OrderCard
          customerName="Paul"
          pickup="Nkwen"
          destination="Mile 4"
          price="2500"
          status="delivered"
        />
      </div>
    </div>
  );
};

export default Orders;
