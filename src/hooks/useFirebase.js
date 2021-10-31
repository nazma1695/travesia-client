import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const singInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        setError(error.massage);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubcribed;
  }, [isLoading]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    error,
    singInUsingGoogle,
    isLoading,
    logOut,
  };
};
export default useFirebase;
