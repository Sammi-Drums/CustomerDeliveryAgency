import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    // Load user on refresh
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Fake login
    const login = (email, password) => {
        // MOCK USERS
        const fakeUser = {
            id: 1,
            name: "Admin User",
            email,
            role: "admin", // admin | vendor | driver
        };

        localStorage.setItem("user", JSON.stringify(fakeUser));
        setUser(fakeUser);
        return true;
    };

    // Fake register
    const register = (name, email, password) => {
        const newUser = {
            id: Date.now(),
            name,
            email,
            role: "vendor",
        };

        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
        return true;
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

