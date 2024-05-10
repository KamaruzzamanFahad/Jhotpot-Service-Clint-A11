import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useState } from 'react'
import app from '../Pages/Config';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState('null')
    const [looding,setlooding] = useState(true)

    const CreateUserByEmail = (email,password) => {
        
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const LoginByEmail = (email,password) => {
        
       return signInWithEmailAndPassword(auth,email,password)
    }
    const LiginByGoogle = () =>{
        
       return signInWithPopup(auth,GoogleProvider)
    }
    const UpdateInfo = (name,photo) =>{
       return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo,
        })
    }
    const LogOut = () =>{
        
        signOut(auth)
    }







    onAuthStateChanged(auth, (user) =>{
        const email = currentuser?.email || user?.email;
        const useremail = { email };
        if(user){
            console.log(user)
            setuser(user)
            setlooding(false)

            axios.post('http://localhost:5000/jwt',useremail, {withCredentials: true,})
            .then(res =>{
                console.log(res.data)
            })
        }
        else{
            console.log('user log out')
            setlooding(false)
            setuser(null)

            axios.post('http://localhost:5000/logout',useremail,{withCredentials: true,})
            .then(res =>{
                console.log(res.data)
            })
        }
    })

    const info = {
        user,
        CreateUserByEmail,
        looding,
        setlooding,
        LoginByEmail,
        LiginByGoogle,
        LogOut,
        UpdateInfo,
        setuser,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;