const Button = ({ children, type = "button", variant = "primary" }) => {
    const base =
        "w-full py-2 rounded-lg font-medium transition";

    const styles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 hover:bg-gray-300",
    };

    return (
        <button type={type} className={`${base} ${styles[variant]}`}>
            {children}
        </button>
    );
};

export default Button;
