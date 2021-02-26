import {useState, useEffect} from 'react';

export function useAuth(authFirebase) {
    const [authentication, setAuthentication] = useState(null);


    const auth = authFirebase();
    const provider = new authFirebase.GoogleAuthProvider();
    provider.setCustomParameters({
        prompt: 'select_account'
    });
    const logIn = () => auth.signInWithPopup(provider);
    const logOut = () => auth.signOut()
    .then()
    .catch(error =>{
        throw new Error(error + ": Ошибка авторизации")
    });

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setAuthentication(user)
            } else {
                setAuthentication(null)
            }
        })
    }, [auth, authentication]);

    return {
        authentication,
        logIn,
        logOut
    };
}