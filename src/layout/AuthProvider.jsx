import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../FIerbase/firebase';
import { useState } from 'react';
export const AuthContext = createContext(null)
 const auth = getAuth(app);
 const AuthProvider = ({children}) => {
   const [user,setUser] = useState(null)
   const createUser = (email,password,name) =>{
    return createUserWithEmailAndPassword(auth,email,password,name)
   }
   const singIn = (email,password) =>{
      return signInWithEmailAndPassword(auth,email,password)
   } 
  const authInfo = {
       user,
       createUser,
       singIn

  }
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;