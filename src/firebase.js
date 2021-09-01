import firebase from "firebase/app"

import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA7_NJw97b3K5-iz_2GsMI7HrZghpGjEqw",
  authDomain: "y-tube-clone.firebaseapp.com",
  projectId: "y-tube-clone",
  storageBucket: "y-tube-clone.appspot.com",
  messagingSenderId: "804480004723",
  appId: "1:804480004723:web:67d754df6584fb37fd3006"
};

firebase.initializeApp(firebaseConfig)


export default firebase.auth();