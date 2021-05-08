import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase';

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // we have a user... there we can store in local storage
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // we have a authUser, therefore clear the local storage
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
  }, [firebase]);

  return { user };
}
