// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBopZo6-CMHG0D6VlnMwMpRm2msDnvWo5E',
  authDomain: 'netflix-clone-3e8b0.firebaseapp.com',
  projectId: 'netflix-clone-3e8b0',
  storageBucket: 'netflix-clone-3e8b0.appspot.com',
  messagingSenderId: '573840974102',
  appId: '1:573840974102:web:47fe1a9ed18240693cf037'
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
