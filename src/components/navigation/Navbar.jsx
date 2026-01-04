import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="font-bold text-lg">CustomerDelivery</h1>

                <div className="flex gap-4 text-sm">
                    <Link to="/create-order" className="hover:text-blue-600">
                        Create Order
                    </Link>
                    <Link to="/orders" className="hover:text-blue-600">
                        Orders
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
