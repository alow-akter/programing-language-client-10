import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../Firebase/Firebase.config';
import { useEffect } from 'react';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [courses, setCourse] = useState([])
    const [loading, setLoading] = useState(true)

    const googleProviderLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const handleCourse = (selectedCourse) => {
        setCourse([...courses, selectedCourse])
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(' inside auth state change', currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = { user, loading, googleProviderLogin, logOut, createUser, logIn, handleCourse, courses }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;