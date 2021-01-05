import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyBXhKLpyFc48gZL18UAGwJrg4-gNlGobIM",
    authDomain: "crwn-react-da5f9.firebaseapp.com",
    projectId: "crwn-react-da5f9",
    storageBucket: "crwn-react-da5f9.appspot.com",
    messagingSenderId: "148685063861",
    appId: "1:148685063861:web:0922ea4fb96ae3e3b620fc",
    measurementId: "G-51MQMB5SN6"
};


firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase