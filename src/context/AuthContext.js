import React, { createContext, useEffect, useState } from 'react';
import { getUser, saveUser, clearUser } from '../utils/storage';
import { auth } from '../utils/firebase/firebaseConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (firebaseUser) => {
        await saveUser(firebaseUser);
        setUser(firebaseUser);
    };

    const logout = async () => {
        // await auth.signOut();
        await clearUser();
        setUser(null);
    };

    useEffect(() => {
        const loadUser = async () => {
            const storedUser = await getUser();
            if (storedUser) {
                setUser(storedUser);
            }
        };
        loadUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};