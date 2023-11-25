import { createContext, useState, useEffect } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
// import useAxiousPublic from "../hooks/useAxiousPublic";
export  const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app)
    // const axiosPublic = useAxiousPublic();
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('currentuser',currentUser)
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    const userinfo = {
        user,
        loading,
        signIn,
        createUser,
        logOut,
        googleSignIn,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;