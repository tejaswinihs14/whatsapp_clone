import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA8XdZkkQe-doQuFlmClkQb4oaCWs5KlLM",
  authDomain: "whatsapp-clone-66f8a.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-66f8a.firebaseio.com",
  projectId: "whatsapp-clone-66f8a",
  storageBucket: "whatsapp-clone-66f8a.appspot.com",
  messagingSenderId: "390887703630",
  appId: "1:390887703630:web:59aa60c64b1abfc57daf1f",
  measurementId: "G-4V7TRMNBPV"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider };
  export default db;