import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ On mount: check if user already logged in (cookie-based session)
  useEffect(() => {
    (async () => {
      try {
        const userData = await authAPI.getProfile(); // backend `/auth/me` route
        if (userData?.user) {
          setUser(userData.user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // ✅ Login
  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await authAPI.login(email, password); // cookie set hogi backend se
      if (response?.user) {
        setUser(response.user);
        setIsAuthenticated(true);
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ✅ Register
  const register = async (email, password, name,role) => {
    setLoading(true);
    // console.log(email, password, name,role)
    try {
      const response = await authAPI.register(email, password, name,role); // cookie set hogi backend se
      // console.log(response);
      if (response?.user) {
        setUser(response.user);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log(error)
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ✅ Logout
  const logout = async () => {
    setLoading(true);
    try {
      await authAPI.logout(); // backend se cookie clear
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
