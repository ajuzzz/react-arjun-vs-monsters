import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config ={
    apiKey: "AIzaSyDNrhmyJOZjX214r0QzC2C8Bh44zlJCKh0",
    authDomain: "react-training-57bbc.firebaseapp.com",
    databaseURL: "https://react-training-57bbc.firebaseio.com",
    projectId: "react-training-57bbc",
    storageBucket: "react-training-57bbc.appspot.com",
    messagingSenderId: "139729907959",
    appId: "1:139729907959:web:4af9cf4c7880af8ebca3f2",
    measurementId: "G-FN88KK7GR3"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if (!snapShot.exists) {
          const {displayName,email } = userAuth;
          const createdAt = new Date();

          try{
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
          }catch (error){
              console.log('error creating user' ,error.message);
          }
      }

      return userRef;
    }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  