import {
  getAuth,
  onAuthStateChanged as _onAuthStateChanged,
  signInAnonymously as _signInAnonymously,
} from 'firebase/auth'
import firebaseApp from './firebase'

const auth = getAuth(firebaseApp)

export function onAuthStateChanged(cb) {
  return _onAuthStateChanged(auth, cb)
}

export async function signInAnonymously() {
  try {
    if (!auth.currentUser) {
      return _signInAnonymously(auth)
    }
  } catch (error) {
    console.error('Error signing in anonymously', error)
  }
}

export async function signOut() {
  try {
    return auth.signOut()
  } catch (error) {
    console.error('Error signing out', error)
  }
}
