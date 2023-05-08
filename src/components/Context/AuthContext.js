
import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from "../../Database/firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
     createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) =>{
     signInWithEmailAndPassword(auth, email, password);
  }

  const logout = () => {
     signOut(auth);
  }


  const forgotPassword = (email) =>{
   return sendPasswordResetEmail(auth,email);
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe();
    }
  }, [])

  const contextValue ={
    user,
    createUser,
    loginUser,
    logout,
    forgotPassword,
  }

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
