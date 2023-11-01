import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
export const AuthContext =createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
const createAccount=(email,password)=>{
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
}
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
        setLoading(false)

          setUser(currentUser)
      });
      return()=>{
       return unsubscribe();
      }


},[])
const signIn=(email,password)=>{
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
}


 const authInfo={signIn , createAccount,user,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {

    children: PropTypes.node,

}

export default AuthProvider;