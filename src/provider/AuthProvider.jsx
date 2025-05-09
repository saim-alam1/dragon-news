import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
export const AuthContext = createContext();

const firebaseAuth = auth;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log(loading, user);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  }

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribed();
    }
  }, [])

  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    logOut,
    loading,
    setLoading,
    updateUser
  }

  return <AuthContext.Provider value={authData}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;