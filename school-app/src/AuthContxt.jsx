import { createContext, useState } from "react";



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // receives object { user, role }
  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContxt.Provider value={{ user, login, logout }}>
      {children}
    </AuthContxt.Provider>
  );
};
