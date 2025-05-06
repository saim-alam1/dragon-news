import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
export const AuthContext = createContext();

const firebaseAuth = auth;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  }

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser)
    });
    return () => {
      unSubscribed();
    }
  }, [])

  const authData = {
    user,
    setUser,
    createUser
  }

  return <AuthContext.Provider value={authData}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;