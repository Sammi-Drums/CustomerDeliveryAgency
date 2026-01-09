export default function Register() {
    return (
        <div className="max-w-md mx-auto mt-0 bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>

            <input
                type="text"
                placeholder="Full Name"
                className="w-full mb-4 border rounded px-3 py-2"
            />

            <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 border rounded px-3 py-2"
            />

            <select className="w-full mb-4 border rounded px-3 py-2">
                <option>Select Role</option>
                <option>Vendor</option>
                <option>Driver</option>
            </select>

            <input
                type="password"
                placeholder="Password"
                className="w-full mb-6 border rounded px-3 py-2"
            />

            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Register
            </button>
        </div>
    );
}
