import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Mohaimen Zaman',
    email: 'mohaimenzaman@gmail.com'
  })

  const authData = {
    user,
    setUser,
  }

  return <AuthContext.Provider value={authData}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;