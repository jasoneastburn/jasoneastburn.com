import {
  signInAnonymously as _signInAnonymously,
  onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import firebaseApp from "./firebase";

const auth = getAuth(firebaseApp);

export function onAuthStateChanged(cb) {
  return _onAuthStateChanged(auth, cb);
}

export async function signInAnonymously() {
  try {

    if (auth.currentUser) {
      console.log("User already signed in anonymously");
    } else {
      return _signInAnonymously(auth);
    }
  } catch (error) {
    console.error("Error signing in anonymously", error);
  }
}

export async function signOut() {
  try {
    return auth.signOut();
  } catch (error) {
    console.error("Error signing out with Google", error);
  }
}