import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword , getAuth ,signInWithEmailAndPassword ,signOut} from "firebase/auth";
import {addDoc,collection,getFirestore} from "firebase/firestore";
import {toast} from "react-toastify";


const firebaseConfig = {
    apiKey: "AIzaSyAZFrDL2NiBTkrQFPGf4eRlqPx6UuGSJ7g",
    authDomain: "netflix-clone-c58a8.firebaseapp.com",
    projectId: "netflix-clone-c58a8",
    storageBucket: "netflix-clone-c58a8.firebasestorage.app",
    messagingSenderId: "580058780155",
    appId: "1:580058780155:web:63568dada6c65f0d677b5e",
    measurementId: "G-9K9CQZTLLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password) => {
    try{
      const res = await createUserWithEmailAndPassword(auth,email,password);
      const user = res.user;
      await addDoc(collection(db,"users"),{
          uid:user.uid,
          name,
          email,
          authProvider: "local",
      });
    }catch(error){
        console.log(error);
        alert(error);
        // toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email,password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    }catch(error){
        console.log(error);
        alert(error);
        // toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () => {
    signOut(auth);
}

export {auth,db,login,signup,logout}