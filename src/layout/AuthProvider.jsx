import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../FIerbase/firebase';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext(null)
 const auth = getAuth(app);
 const AuthProvider = ({children}) => {
   const [user,setUser] = useState(null)
   const [loading,setLoading] = useState(true)
   const createUser = (email,password,name) =>{
    return createUserWithEmailAndPassword(auth,email,password,name)
   }
   const singIn = (email,password) =>{
      return signInWithEmailAndPassword(auth,email,password)
   } 
    const logOut = () =>{
      return signOut(auth)
    }
   useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log("auth state change",currentUser);
        setUser(currentUser)
        setLoading(false)
     })
     return ()=>{
        unsubscribe();
     }
   },[])
  const authInfo = {
       user,
       createUser,
       singIn,
       logOut,
       loading

  }
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;