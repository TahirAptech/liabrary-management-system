import { db, auth } from '../FirebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';

const dbRef = collection(db, "users");

class UserAuthService {

    signUp = (email, password) => {
        debugger
        let response = { res: true, message: '' };
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                debugger
                response.message = "Successfully Signup!";
                console.log(user.user);
                //await addDoc(dbRef,);
            })
            .catch((error) => 
            { 
                debugger 
                response.res = false;
                console.log(error);
                response.message = error;
            });
        return response;
    }
    logIn = (email, password) => {
        let response = { res: true, message: '', user: {} };
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => { response.message = "Successfully Login!"; response.user = user.user })
            .catch(error => { response.res = false; response.message = error });
    }
}
export default new UserAuthService();