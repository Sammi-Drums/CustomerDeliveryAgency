import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("currentUser")) || null
    );

    // Register
    const register = (data) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        users.push(data);
        localStorage.setItem("users", JSON.stringify(users));

        console.log("Registered:", data);

        return true;
    };

    // Login
    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = users.find(
            (u) => u.email === email && u.password === password
        );

        if (!foundUser) return null;

        setUser(foundUser);
        localStorage.setItem("currentUser", JSON.stringify(foundUser));

        return foundUser;
    };


    const logout = () => {
        setUser(null);
        localStorage.removeItem("currentUser");
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
